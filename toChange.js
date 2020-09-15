var url = window.location.href;

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

var checkExist = setInterval(async function () {
  var firstName = await mainFuction();
  var lastName = await getLastName();
  var profilePicture = await getPP();
  var userEmail = await getEmail();
  var uniqueID = await getUniqueID();

  // if ($("html").attr("dark")) {
  //   console.log("Dark mode");
  // } else {
  //   console.log("Light mode");
  // }

  var isDark = $("html").attr("dark");

  if (
    $(
      "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > span"
    ).length
  ) {
    //console.log("Exists!");
    var str = $(
      "ytd-comments > ytd-item-section-renderer > #contents > ytd-message-renderer > yt-formatted-string > span"
    ).text();
    console.log(str);
    $("ytd-comments").replaceWith(
      `
      <!-- Copy This -->
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
    />
      <link rel="stylesheet" ${
        isDark
          ? 'href = "http://localhost:5500/stylesDark.css"'
          : 'href = "http://localhost:5500/styles.css"'
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
    
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <!-- <script src="./apiRenderedjs.js"></script> -->
      <script src="http://127.0.0.1:5500/apiRenderedjs.js"></script>
      `
    );
    clearInterval(checkExist);
  }
}, 100); // check every 100ms

// $("ytd-comments").load("http://127.0.0.1:5500/file/commentSection.html");
