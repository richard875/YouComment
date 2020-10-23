chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    chrome.tabs.sendMessage(tabId, { type: "getDoc" }, function (doc) {
      console.log(doc);
    });
  }
});

async function is_signed_in() {
  function mainFuction() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get("firstName", function (options) {
        resolve(options.firstName);
      });
    });
  }

  function getLastName() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get("lastName", function (options) {
        resolve(options.lastName);
      });
    });
  }

  function getPP() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get("profilePicture", function (options) {
        resolve(options.profilePicture);
      });
    });
  }

  function getEmail() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get("userEmail", function (options) {
        resolve(options.userEmail);
      });
    });
  }

  function getUniqueID() {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get("uniqueID", function (options) {
        resolve(options.uniqueID);
      });
    });
  }

  var firstName = await mainFuction();
  var lastName = await getLastName();
  var profilePicture = await getPP();
  var userEmail = await getEmail();
  var uniqueID = await getUniqueID();

  if (
    firstName === "no" &&
    lastName === "no" &&
    profilePicture === "no" &&
    userEmail === "no" &&
    uniqueID === "no"
  ) {
    return false;
  } else {
    return true;
  }
}

let user_signed_in = false;
const CLINT_ID = encodeURIComponent(
  "654630289150-68nqrjmomrnmcel0r737glpfhml8mmh3.apps.googleusercontent.com"
);
const RESPONSE_TYPE = encodeURIComponent("id_token");
const REDIRECT_URL = encodeURIComponent(
  "https://jbdfjoimaiokjhpdciagpoicekdampgk.chromiumapp.org"
);
const STATE = encodeURIComponent("jfkls3n");
const SCOPE = encodeURIComponent("openid profile email");
const PROMPT = encodeURIComponent("consent");

//YC
//654630289150-68nqrjmomrnmcel0r737glpfhml8mmh3.apps.googleusercontent.com
//6uTntv-iTquMWn52PMxBSNYK

function create_oauth2_url() {
  let nonce = encodeURIComponent(
    Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  );
  let url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLINT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URL}&state=${STATE}&scope=${SCOPE}&prompt=${PROMPT}&nonce=${nonce}`;

  return url;
}

function is_user_signed_in() {
  return user_signed_in;
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "login") {
    if (is_user_signed_in()) {
      console.log("User is already signed in");
    } else {
      chrome.identity.launchWebAuthFlow(
        {
          url: create_oauth2_url(),
          interactive: true,
        },
        function (redirect_url) {
          //console.log(redirect_url);
          let id_token = redirect_url.substring(
            redirect_url.indexOf("id_token=") + 9
          );
          id_token = id_token.substring(0, id_token.indexOf("&"));

          const user_info = KJUR.jws.JWS.readSafeJSONString(
            b64utoutf8(id_token.split(".")[1])
          );

          console.log(user_info);
          // Store User info
          chrome.storage.sync.set({ firstName: user_info.given_name });
          chrome.storage.sync.set({ lastName: user_info.family_name });
          chrome.storage.sync.set({ profilePicture: user_info.picture });
          chrome.storage.sync.set({ userEmail: user_info.email });
          chrome.storage.sync.set({ uniqueID: user_info.sub });

          if (
            (user_info.iss === "https://accounts.google.com" ||
              user_signed_in.iss === "accounts.google.com") &&
            user_info.aud === CLINT_ID
          ) {
            chrome.browserAction.setPopup(
              { popup: "./signOut.html" },
              function () {
                user_signed_in = true;
                sendResponse("success");
                chrome.tabs.query(
                  {
                    active: true,
                    currentWindow: true,
                  },
                  function (tabs) {
                    if (
                      tabs[0].url.includes("youtu.be") ||
                      tabs[0].url.includes(".youtube.")
                    ) {
                      chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
                    }
                  }
                );
              }
            );
          } else {
            console.log("Could not authenticate");
          }
        }
      );

      return true;
    }
  } else if (request.message === "logout") {
    chrome.browserAction.setPopup({ popup: "./index.html" }, function () {
      user_signed_in = false;
      chrome.storage.sync.set({ firstName: "no" });
      chrome.storage.sync.set({ lastName: "no" });
      chrome.storage.sync.set({ profilePicture: "no" });
      chrome.storage.sync.set({ userEmail: "no" });
      chrome.storage.sync.set({ uniqueID: "no" });
      sendResponse("success");
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        function (tabs) {
          if (
            tabs[0].url.includes("youtu.be") ||
            tabs[0].url.includes(".youtube.")
          ) {
            chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
          }
        }
      );
    });

    return true;
  } else if (request.message === "isUserSignedIn") {
    sendResponse(is_user_signed_in());
    return true;
  }
});

chrome.runtime.onStartup.addListener(async function (activeInfo) {
  console.log(await is_signed_in());
  if (await is_signed_in()) {
    chrome.browserAction.setPopup({ popup: "./signOut.html" }, function () {});
  } else {
    chrome.browserAction.setPopup({ popup: "./index.html" }, function () {});
  }
});
