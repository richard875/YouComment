var videoUrl = window.location.href;

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

chrome.extension.onMessage.addListener(function (request, sender, response) {
  if (request.type === "getDoc") {
    //alert("git it!");
    $(function () {
      var videoUrl = window.location.href;
      var triggerOnceforShare = true;
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 300 && triggerOnceforShare) {
          triggerOnceforShare = false;
          //alert(YouTubeGetID(videoUrl).length);
          if (YouTubeGetID(videoUrl).length === 11) {
            if ($("#anIDNoOneWillEverThinkOf").length) {
              $("#anIDNoOneWillEverThinkOf").remove();
            }
            //alert("ad just passed.");
            console.log("Once");
            wait(300);
            process();
            response(document.body.innerHTML);
          }
        }
      });
    });
  }

  return true;
});

// window.addEventListener("yt-navigate-start", process);

// if (document.body) process();
// else document.addEventListener("DOMContentLoaded", process);

//Get YouTube ID from various YouTube URL
function YouTubeGetID(url) {
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
}

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

function process() {
  var url = window.location.href;
  //alert(url);

  //$("ytd-comments").replaceWith($("ytd-comments"));
  // $("#idkidkidk").replaceWith(`<div id="idkidkidk">${url}</div>`);

  // $("#anIDNoOneWillEverThinkOf").replaceWith(
  //   `<div id="anIDNoOneWillEverThinkOf"></div>`
  // );
  if ($("#anIDNoOneWillEverThinkOf").length) {
    $("#anIDNoOneWillEverThinkOf").remove();
  }

  var checkExist = setTimeout(async function () {
    var firstName = await mainFuction();
    var lastName = await getLastName();
    var profilePicture = await getPP();
    var userEmail = await getEmail();
    var uniqueID = await getUniqueID();
    //alert(firstName + lastName + profilePicture + userEmail + uniqueID);

    if ($("#anIDNoOneWillEverThinkOf").length) {
      $("#anIDNoOneWillEverThinkOf").remove();
    }

    var isDark = $("html").attr("dark");

    if (
      $(
        "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > span"
      ).length ||
      $("ytd-comments").children().eq(2).attr("id") ===
        "anIDNoOneWillEverThinkOf"
    ) {
      //clearInterval(checkExist);
      //console.log("Exists!");
      // var str =
      //   $(
      //     "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > span"
      //   ).text() === "Comments are turned off. ";
      //console.log(str);
      if (
        firstName === "no" &&
        lastName === "no" &&
        profilePicture === "no" &&
        userEmail === "no" &&
        uniqueID === "no"
      ) {
        $(
          "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > span"
        ).html("Please login to YouComment!");
        $(
          "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > a"
        ).remove();
      } else {
        if (!$("#anIDNoOneWillEverThinkOf").length) {
          console.log("it is");
          $("ytd-comments").append(`
        <div class="anIDNoOneWillEverThinkOf" id="anIDNoOneWillEverThinkOf">
        <!-- Copy This -->
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      />
        <link rel="stylesheet" ${
          isDark
            ? 'href = "http://127.0.0.1:5500/stylesDark.css"'
            : 'href = "http://127.0.0.1:5500/styles.css"'
        } / >
  
        <div id="bigCont" style="color: #030303">
          <!-- Export to Background -->
          <div id="exportContent"></div>
          <div id="${url}"></div>
          <div id="${firstName}"></div>
          <div id="${lastName}"></div>
          <div id="${profilePicture}"></div>
          <div id="${userEmail}"></div>
          <div id="${uniqueID}"></div>
          <!-- Finish Export to Background -->
          <!-- Top Line -->
          <div class="introAndNum">
            <div class="introAndNumTop">
              <div id="commentNumber"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <!-- <div class="sortByButton">
                ☰&nbsp;&nbsp;SORT BY
                <span class="tooltiptext">Sort comments</span>
              </div> -->
            </div>
            <div class="introAndNumTop"><a class="donateButton" href="https://nervous-curie-029dd6.netlify.app/" target="_blank">Donate!</a></div>
            <div class="introAndNumTop"><div>Powered by YouComment™</div></div>
          </div>
          <!-- Write comment section -->
          <div class="addComment">
            <div class="userProfileFrame">
              <img
                class="userProfilePicFrame"
                src="${profilePicture}"
              />
            </div>
            <div class="addCommentRight">
              <textarea
                placeholder="Add a public comment..."
                class="commentInput"
                id="commentInput"
                onfocus="textAreaFocus(); textExpand(this)"
              ></textarea>
              <div class="runderline"></div>
              <div id="commentButtonBox">
                <div id="cancelButton">CANCEL</div>
                <div id="commentButton">COMMENT</div>
              </div>
            </div>
          </div>
          <!-- White space -->
          <div style="width: 100%; height: 2rem"></div>
          <!-- Comment Sections -->
          <div id="commentSection"></div>
        </div>
  
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- <script src="./apiRenderedjs.js"></script> -->
        <!-- <script src="http://127.0.0.1:5500/apiRenderedjs.js"></script> -->
        <script src="https://youcomment-files.s3-ap-southeast-2.amazonaws.com/apiRenderedjs.js"></script>
        </div>
        `);
        } else {
          $("#anIDNoOneWillEverThinkOf").replaceWith(`
        <div class="anIDNoOneWillEverThinkOf" id="anIDNoOneWillEverThinkOf">
        <!-- Copy This -->
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      />
        <link rel="stylesheet" ${
          isDark
            ? 'href = "https://youcomment-files.s3-ap-southeast-2.amazonaws.com/stylesDark.css"'
            : 'href = "https://youcomment-files.s3-ap-southeast-2.amazonaws.com/styles.css"'
        } / >
  
        <div id="bigCont" style="color: #030303">
          <!-- Export to Background -->
          <div id="exportContent">${url}</div>
          <div id="${url}"></div>
          <div id="${firstName}"></div>
          <div id="${lastName}"></div>
          <div id="${profilePicture}"></div>
          <div id="${userEmail}"></div>
          <div id="${uniqueID}"></div>
          <!-- Finish Export to Background -->
          <!-- Top Line -->
          <div class="introAndNum">
            <div class="introAndNumTop">
              <div id="commentNumber"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <!-- <div class="sortByButton">
                ☰&nbsp;&nbsp;SORT BY
                <span class="tooltiptext">Sort comments</span>
              </div> -->
            </div>
            <div class="introAndNumTop"><a class="donateButton" href="https://nervous-curie-029dd6.netlify.app/" target="_blank">Donate!</a></div>
            <div class="introAndNumTop"><div>Powered by YouComment™</div></div>
          </div>
          <!-- Write comment section -->
          <div class="addComment">
            <div class="userProfileFrame">
              <img
                class="userProfilePicFrame"
                src="${profilePicture}"
              />
            </div>
            <div class="addCommentRight">
              <textarea
                placeholder="Add a public comment..."
                class="commentInput"
                id="commentInput"
                onfocus="textAreaFocus(); textExpand(this)"
              ></textarea>
              <div class="runderline"></div>
              <div id="commentButtonBox">
                <div id="cancelButton">CANCEL</div>
                <div id="commentButton">COMMENT</div>
              </div>
            </div>
          </div>
          <!-- White space -->
          <div style="width: 100%; height: 2rem"></div>
          <!-- Comment Sections -->
          <div id="commentSection"></div>
        </div>
  
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <!-- <script src="./apiRenderedjs.js"></script> -->
        <!-- <script src="http://127.0.0.1:5500/apiRenderedjs.js"></script> -->
        <script src="https://youcomment-files.s3-ap-southeast-2.amazonaws.com/apiRenderedjs.js"></script>
        </div>
        `);
        }
      }
      //clearInterval(checkExist);
    }
  }, 500); // check every 100ms
}
