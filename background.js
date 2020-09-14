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

          //console.log(user_info);
          // Store User info
          chrome.storage.sync.set({ firstName: user_info.given_name });
          chrome.storage.sync.set({ lastName: user_info.family_name });
          chrome.storage.sync.set({ profilePicture: user_info.picture });

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
      sendResponse("success");
    });

    return true;
  } else if (request.message === "isUserSignedIn") {
    sendResponse(is_user_signed_in());
  }
});
