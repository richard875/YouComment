window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-170975862-4");

function textExpand(e) {
  var className = $(e).attr("class");
  // Targets all textareas with class "commentInput"
  let textareas = document.querySelectorAll(`.${className}`),
    hiddenDiv = document.createElement("div"),
    content = null;

  // Adds a class to all textareas
  for (let j of textareas) {
    j.classList.add("txtstuff");
  }

  // Build the hidden div's attributes

  // The line below is needed if you move the style lines to CSS
  // hiddenDiv.classList.add('hiddendiv');

  // Add the "commentInput" styles, which are common to both textarea and hiddendiv
  // If you want, you can remove those from CSS and add them via JS
  try {
    hiddenDiv.classList.add(`${className}`);
  } catch (DOMException) {}

  // Add the styles for the hidden div
  // These can be in the CSS, just remove these three lines and uncomment the CSS
  hiddenDiv.style.display = "none";
  hiddenDiv.style.whiteSpace = "pre-wrap";
  hiddenDiv.style.wordWrap = "break-word";

  // Loop through all the textareas and add the event listener
  for (let i of textareas) {
    (function (i) {
      // Note: Use 'keyup' instead of 'input'
      // if you want older IE support
      i.addEventListener("input", function () {
        // Append hiddendiv to parent of textarea, so the size is correct
        i.parentNode.appendChild(hiddenDiv);

        // Remove this if you want the user to be able to resize it in modern browsers
        i.style.resize = "none";

        // This removes scrollbars
        i.style.overflow = "hidden";

        // Every input/change, grab the content
        content = i.value;

        // Add the same content to the hidden div

        // This is for old IE
        content = content.replace(/\n/g, "<br>");

        // The <br ..> part is for old IE
        // This also fixes the jumpy way the textarea grows if line-height isn't included
        hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

        // Briefly make the hidden div block but invisible
        // This is in order to read the height
        hiddenDiv.style.visibility = "hidden";
        hiddenDiv.style.display = "block";
        i.style.height = hiddenDiv.offsetHeight + "px";

        // Make the hidden div display:none again
        hiddenDiv.style.visibility = "visible";
        hiddenDiv.style.display = "none";
      });
    })(i);
  }
}

// Start from here

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

function brInStr(str) {
  var lines = str.split("<br />");
  return lines.length;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function encodeHTML(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/(\r\n|\n|\r)/g, "<br />");
}

function clearNum(num) {
  if (num >= 1000000000000) {
    if (num % 1000000000000 == 0) {
      return (num / 1000000000000).toFixed(0) + "T";
    } else {
      return (num / 1000000000000).toFixed(1) + "T";
    }
  } else if (num >= 1000000000) {
    if (num % 1000000000 == 0) {
      return (num / 1000000000).toFixed(0) + "B";
    } else {
      return (num / 1000000000).toFixed(1) + "B";
    }
  } else if (num >= 1000000) {
    if (num % 1000000 == 0) {
      return (num / 1000000).toFixed(0) + "M";
    } else {
      return (num / 1000000).toFixed(1) + "M";
    }
  } else if (num >= 1000) {
    if (num % 1000 == 0) {
      return (num / 1000).toFixed(0) + "K";
    } else {
      return (num / 1000).toFixed(1) + "K";
    }
  } else {
    return num;
  }
}

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

// This is the Video ID from toChange.js!!!!
var vID = $("#exportContent").next().attr("id");
var firstName = $("#exportContent").next().next().attr("id");
var lastName = $("#exportContent").next().next().next().attr("id");
var profilePicture = $("#exportContent").next().next().next().next().attr("id");
var userEmail = $("#exportContent")
  .next()
  .next()
  .next()
  .next()
  .next()
  .attr("id");
var uniqueID = $("#exportContent")
  .next()
  .next()
  .next()
  .next()
  .next()
  .next()
  .attr("id");
// console.log(vID);
// console.log(firstName);
// console.log(lastName);
// console.log(profilePicture);
// console.log(userEmail);
// console.log(uniqueID);

vID = YouTubeGetID(vID);

// prettier-ignore
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 9="8://7.6-5.4-3-2.1.0";',11,11,'com|amazonaws||southeast|ap|api|execute|k9tedm36fj|https|reg|var'.split('|'),0,{}))
// prettier-ignore
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('c b="a://9.8-7.6-5-2.4.3/1/0";',13,13,'userLogin|dev||com|amazonaws|southeast|ap|api|execute|zw8w678x2d|https|sep|var'.split('|'),0,{}))

var settings = {
  url: sep,
  method: "POST",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    userEmail: userEmail,
    lastName: lastName,
    firstName: firstName,
    profilePicture: profilePicture,
    uniqueID: uniqueID,
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Tested URLs:
// var url = 'http://youtube.googleapis.com/v/4e_kz79tjb8?version=3';
// url = 'https://www.youtube.com/watch?feature=g-vrec&v=Y1xs_xPb46M';
// url = 'http://www.youtube.com/watch?feature=player_embedded&v=Ab25nviakcw#';
// url = 'http://youtu.be/Ab25nviakcw';
// url = 'http://www.youtube.com/watch?v=Ab25nviakcw';
// url = '<iframe width="420" height="315" src="http://www.youtube.com/embed/Ab25nviakcw" frameborder="0" allowfullscreen></iframe>';
// url = '<object width="420" height="315"><param name="movie" value="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="420" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>';
// url = 'http://i1.ytimg.com/vi/Ab25nviakcw/default.jpg';
// url = 'https://www.youtube.com/watch?v=BGL22PTIOAM&feature=g-all-xit';
// url = 'BGL22PTIOAM';

// Not using
function getUID() {
  return uniqueID;
}

function fetchData() {
  const url = `${reg}/dev/video/${vID}`;
  var settings = {
    url: url,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings)
    .done(function (data) {
      //   console.log(response);
      // });

      // fetch(url)
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //console.log(data);
      newId = Object.keys(data).length;
      $("#commentNumber").html(
        numberWithCommas(newId) + (newId > 1 ? " Comments" : " Comment")
      );
      var rendered = data.map((comment) => {
        singleComment = `
          <!-- Each comments -->
          <div class="comments">
            <div class="commentProfileFrame">
              <img
                class="userProfilePicFrame"
                style="margin-top: 1rem;"
                src="${comment.profilePicture}"
              />
            </div>
            <div class="commentRight">
              <div class="nameAndTime">
                <div style="letter-spacing: 0.03rem;">
                  <b>${comment.user.firstName} ${comment.user.lastName}</b>
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div style="color: #909090;">
                  ${timeSince(Date.parse(comment.createdAt))} ago
                  ${comment.edited ? ` (edited)` : ``}
                </div>
              </div>
              <!-- White space -->
              <div style="width: 100%; height: 1rem;"></div>
        ${
          brInStr(comment.body) > 3
            ? `
          <div class="userCommentBox" style="height: 4.3em;">
            ${comment.body}
          </div>
          <div class="comReadMore" onclick="readMore(this)">
            Read more
          </div>
          <div class="comReadLess" onclick="readLess(this)">
            Show less
          </div>
          `
            : `
          <div class="userCommentBox">
            ${comment.body}
          </div>

          <div class="comReadMore" style="display: none;" onclick="readMore(this)">
            Read more
          </div>
          <div class="comReadLess" onclick="readLess(this)">
            Show less
          </div>
          `
        }
              <!-- White space -->
              <div style="width: 100%; height: 1rem;"></div>
              <div class="likeDislikeComment">
                <div class="tUp" onclick="tUp(this)" style="color: ${
                  comment.reaction[uniqueID] === "liked"
                    ? "rgb(8, 96, 212)"
                    : "rgb(144, 144, 144)"
                };">
                  <i
                    class="fa fa-thumbs-up"
                    style="font-size: 1.3rem;"
                    aria-hidden="true"
                  ></i>
                  <span class="tUptooltiptext">Like</span>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div class="tUpCount">${comment.reviews.likes}</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div class="tDown" onclick="tDown(this)" style="color: ${
                  comment.reaction[uniqueID] === "unLiked"
                    ? "rgb(8, 96, 212)"
                    : "rgb(144, 144, 144)"
                };">
                  <i
                    class="fa fa-thumbs-down"
                    style="font-size: 1.3rem; transform: scale(-1, 1);"
                    aria-hidden="true"
                  ></i
                  ><span class="tDowntooltiptext">Dislike</span>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style="cursor: pointer;" onclick="reply(this)">REPLY</div>
                ${
                  comment.googleID === uniqueID
                    ? `
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style="cursor: pointer" onclick="editComment(this)" class="replyComment">EDIT</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div
                    class="tDown"
                    id="deleteComment"
                    onclick="deleteComment(this)"
                    style="color: #909090"
                  ><i
                    class="fa fa-trash"
                    style="font-size: 1.3rem; transform: scale(-1, 1)"
                    aria-hidden="true"
                  ></i>
                  <span class="tDowntooltiptext">Delete</span>
                </div>
                `
                    : ``
                }
              </div>
              <!-- 1 -->
              <div class="replyAddComment">
                <div class="userProfileFrame">
                  <img
                    class="userProfilePicFrame"
                    style="margin-top: 0.6rem;"
                    src="${profilePicture}"
                  />
                </div>
                <div class="addCommentRight">
                  <textarea
                    placeholder="Add a public reply..."
                    class="commentInput"
                    onfocus="textExpand(this)"
                  ></textarea>
                  <div class="runderline"></div>
                  <div id="replyCommentButtonBox">
                    <div class="replyCancelButton" onclick="replyCancel(this)">
                      CANCEL
                    </div>
                    <div id="commentButton" style="width: 80px;" onclick="replyOnComment(this)">
                      REPLY
                    </div>
                  </div>
                </div>
              </div>
              <div id="${comment.videoID}"></div>
              <div id="${comment.creatSort}"></div>
              <div id="newComments"></div>
        `;

        if (!(comment.replies === undefined || comment.replies.length == 0)) {
          singleComment += `
          <div
            class="showReplies"
            onclick="showReplies(this)"
            style="
              color: #085fd4;
              font-size: 1.4rem;
              cursor: pointer;
              margin-top: 1rem;
              user-select: none; /* supported by Chrome and Opera */
              -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
              -moz-user-select: none; /* Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
            "
            >
              <i class="fas fa-caret-down"></i>&nbsp;&nbsp;&nbsp;View ${
                Object.keys(comment.replies).length
              } ${
            Object.keys(comment.replies).length == 1 || 0 ? "reply" : "replies"
          }
          </div>
          <div
            class="hideReplies"
            onclick="hideReplies(this)"
            style="
              color: #085fd4;
              font-size: 1.4rem;
              cursor: pointer;
              display: none;
              margin-top: 1rem;
              user-select: none; /* supported by Chrome and Opera */
              -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
              -moz-user-select: none; /* Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
            "
            >
              <i class="fas fa-caret-up"></i>&nbsp;&nbsp;&nbsp;Hide ${
                Object.keys(comment.replies).length
              } ${
            Object.keys(comment.replies).length == 1 || 0 ? "reply" : "replies"
          }
          </div>
          <div class="allReplyOnComment">
          <!-- White space -->
          <div style="width: 100%; height: 1rem;"></div>
          `;
          comment.replies.map((reply) => {
            singleComment += `
            <div class="replyOnComment">
          <div class="replyOnCommentProfileFrame">
            <img
              class="replyOnCommentProfilePicFrame"
              style="margin-top: 1rem;"
              src="${reply.profilePicture}"
            />
          </div>
          <div class="replyOnCommentRight" style="margin: 1.5rem;">
            <div class="nameAndTime">
              <div style="letter-spacing: 0.03rem;"><b>${
                reply.user.firstName
              } ${reply.user.lastName}</b></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style="color: #909090;">${timeSince(
                Date.parse(reply.createdAt)
              )} ago</div>
            </div>
            <!-- White space -->
            <div style="width: 100%; height: 1rem;"></div>
            ${
              brInStr(reply.body) > 3
                ? `
            <div class="replyCommentBox" style="height: 4.3em;">${reply.body}</div>
            <div class="repReadMore" onclick="readMore(this)">Read more</div>
            <div class="repReadLess" onclick="readLess(this)">Show less</div>
            `
                : `
                <div class="replyCommentBox">${reply.body}</div>
                <div class="repReadMore" style="display: none;" onclick="readMore(this)">Read more</div>
                <div class="repReadLess" onclick="readLess(this)">Show less</div>
                `
            }
            <!-- White space -->
            <div style="width: 100%; height: 1rem;"></div>
            <div class="likeDislikeComment">
              <div class="tUp" onclick="tUpMock(this)" style="color: #909090;">
                <i
                  class="fa fa-thumbs-up"
                  style="font-size: 1.3rem;"
                  aria-hidden="true"
                ></i>
                <span class="tUptooltiptext">Like</span>
              </div>
              <!-- &nbsp;&nbsp;&nbsp; -->
              <div class="tUpCount" style="display: none;">0</div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="tDown" onclick="tDownMock(this)" style="color: #909090;">
                <i
                  class="fa fa-thumbs-down"
                  style="font-size: 1.3rem; transform: scale(-1, 1);"
                  aria-hidden="true"
                ></i
                ><span class="tDowntooltiptext">Dislike</span>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style="cursor: pointer;" class="replyReplyComment" onclick="replyToComment(this)">
                REPLY
              </div>
            </div>
            <div id="toWhom" style="padding-top: 2vh; font-size: 1.5vh; display: none"></div>
            <!-- Write comment section -->
            <div class="replyAddReply">
              <div class="userProfileFrame">
                <img
                  class="userProfilePicFrame"
                  style="width: 30px; height: 30px; margin-top: 0.6rem;"
                  src="${profilePicture}"
                />
              </div>
              <div class="addCommentRight">
                <textarea
                  placeholder="Add a public comment..."
                  class="commentInput"
                  onfocus="textExpand(this)"
                ></textarea>
                <div class="runderline"></div>
                <div id="replyReplyButtonBox">
                  <div class="replyReplyCancelButton" onclick="replyCancelWithComment(this)">
                    CANCEL
                  </div>
                  <div id="commentButton" onclick="newReplyComment(this)">
                    COMMENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            `;
          });
        }

        singleComment += `</div></div></div>`;

        return singleComment;
      });
      $(`#commentSection`).prepend(rendered);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
fetchData();

function textAreaFocus() {
  $("#commentButtonBox").css("display", "flex");
  $("#commentInput").css("height", "2rem");
}

$("#cancelButton").click(function () {
  $("#commentButtonBox").css("display", "none");
  $("#commentInput").css("height", "2rem");
  $("#commentInput").val("");
});

$("#commentButton").click(function () {
  var txt = $("#commentInput").val();
  var newId = 100;

  var url = `${reg}/dev/createVideo`;

  if (txt.replace(/(\s|\r\n|\n|\r)/g, "").length) {
    txt = encodeHTML(txt);
    //txt = txt.replace(/(\r\n|\n)/g, "<br />");
    console.log(txt);
    var settings = {
      url: url,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        videoID: `${vID}`,
        profilePicture: `${profilePicture}`,
        user: { firstName: `${firstName}`, lastName: `${lastName}` },
        body: txt,
        googleID: `${uniqueID}`,
      }),
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      $("#commentSection").prepend(`
    <!-- Each comments -->
      <div class="comments">
        <div class="commentProfileFrame">
          <img
            class="userProfilePicFrame"
            style="margin-top: 1rem;"
            src="${profilePicture}"
          />
        </div>
        <div class="commentRight">
          <div class="nameAndTime">
            <div style="letter-spacing: 0.03rem;">
              <b>${firstName} ${lastName}</b>
            </div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div style="color: #909090;">
              ${timeSince(Date.now())} ago
            </div>
          </div>
          <!-- White space -->
          <div style="width: 100%; height: 1rem;"></div>
          <div class="userCommentBox" id="userCommentBox${newId + 1}">
            ${txt}
            <br/>
          </div>
          <div class="comReadMore" id="comReadMore${
            newId + 1
          }" onclick="readMore(this)">Read more</div>
          <div class="comReadLess" onclick="readLess(this)">Show less</div>
          </div>
        </div>
    `);

      if ($(`#userCommentBox${newId + 1}`).height() < 68) {
        $(`#comReadMore${newId + 1}`).css("display", "none");
      } else {
        $(`#userCommentBox${newId + 1}`).css("height", "4.3em");
      }

      $("#commentInput").val("");
      $("#commentInput").css("height", "2rem");
      $("#commentButtonBox").css("display", "none");

      //newId++;
    });
  }
});

function editComment(e) {
  if ($(e).parent().next().css("display", "flex")) {
    $(e).parent().next().css("display", "none");
  }
  if (!$(e).parent().prev().attr("id")) {
    $(e).parent().before(`
  <div class="replyAddComment" id="toEditAComment" style="display: flex">
    <div class="userProfileFrame">
      <img
        class="userProfilePicFrame"
        style="margin-top: 0.6rem;"
        src="${profilePicture}"
      />
    </div>
      <div class="addCommentRight">
        <textarea
          placeholder="Edit your comment..."
          class="commentInput"
          onfocus="textExpand(this)"
        ></textarea>
        <div class="runderline"></div>
        <div id="replyCommentButtonBox">
          <div class="replyCancelButton" onclick="cancelEdit(this)">
            CANCEL
          </div>
          <div id="commentButton" style="width: 80px;" onclick="confirmEdit(this)">
            EDIT
          </div>
        </div>
      </div>
    </div>
  `);
    $(e).parent().prev().children().eq(1).children().eq(0).focus();
  }
}

function cancelEdit(e) {
  $(e).parent().parent().parent().remove();
}

function confirmEdit(e) {
  var txt = $(e).parent().prev().prev().val();
  var video = $(e).parent().parent().parent().next().next().next().attr("id");
  var createSort = $(e)
    .parent()
    .parent()
    .parent()
    .next()
    .next()
    .next()
    .next()
    .attr("id");
  var url = `${reg}/dev/editComment/${video}/timeStamp/${createSort}`;

  if (txt.replace(/(\s|\r\n|\n)/g, "").length) {
    txt = encodeHTML(txt);

    var settings = {
      url: url,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ body: txt }),
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      $(e).parent().parent().parent().prev().prev().prev().prev().html(txt);
      $(e)
        .parent()
        .parent()
        .parent()
        .prev()
        .prev()
        .prev()
        .prev()
        .prev()
        .prev()
        .children()
        .eq(2).html(`
          ${$(e)
            .parent()
            .parent()
            .parent()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .prev()
            .children()
            .eq(2)
            .html()} (edited)`);
      $(e).parent().parent().parent().remove();
    });
  }
}

function deleteComment(e) {
  if (!$(e).next().length) {
    $(e).after(`
  <div style="width: 2vh; height: 1px"></div>
  <div id="toCheck" onclick="cencelDelete(this)" style="cursor: pointer; font-weight: bold">Cancel</div>
  <div style="width: 1vh; height: 1px"></div>
  <div id="" onclick="confirm(this)" style="cursor: pointer; font-weight: bold; color: red">Delete</div>
  `);
  } else {
    $(e).next().next().next().next().remove();
    $(e).next().next().next().remove();
    $(e).next().next().remove();
    $(e).next().remove();
  }
}

function confirm(e) {
  //$(e).attr("id", "confirmed");
  var vID = $(e).parent().next().next().attr("id");
  var createSort = $(e).parent().next().next().next().attr("id");

  var settings = {
    url: `${reg}/dev/deleteComment/${vID}/timeStamp/${createSort}`,
    method: "DELETE",
    timeout: 0,
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    $(e).parent().parent().parent().remove();
  });
}

function cencelDelete(e) {
  $(e).prev().remove();
  $(e).next().next().remove();
  $(e).next().remove();
  $(e).remove();
}

function replyOnComment(e) {
  var txt = $(e).parent().prev().prev().val();
  var video = $(e).parent().parent().parent().next().attr("id");
  var createSort = $(e).parent().parent().parent().next().next().attr("id");
  var url = `${reg}/dev/replyToMainComment/${video}/timeStamp/${createSort}`;

  if (txt.replace(/(\s|\r\n|\n)/g, "").length) {
    txt = encodeHTML(txt);
    //txt = txt.replace(/(\r\n|\n)/g, "<br />");
    var settings = {
      url: url,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        profilePicture: `${profilePicture}`,
        user: { firstName: `${firstName}`, lastName: `${lastName}` },
        body: txt,
      }),
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      $(e).parent().parent().parent().next().next().next().prepend(`
  <div class="replyOnComment">
  <div class="replyOnCommentProfileFrame">
    <img
      class="replyOnCommentProfilePicFrame"
      style="margin-top: 1rem;"
      src="${profilePicture}"
    />
  </div>
  <div class="replyOnCommentRight" style="margin: 1.5rem;">
    <div class="nameAndTime">
      <div style="letter-spacing: 0.03rem;">
        <b>${firstName} ${lastName}</b>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div style="color: #909090;">
      ${timeSince(Date.now())} ago
      </div>
    </div>
    <!-- White space -->
    <div style="width: 100%; height: 1rem;"></div>
    ${
      brInStr(txt) > 3
        ? `
      <div class="replyCommentBox" style="height: 4.3em;">${txt}</div>
      <div class="repReadMore" onclick="readMore(this)">Read more</div>
      <div class="repReadLess" onclick="readLess(this)">Show less</div>
      `
        : `
      <div class="replyCommentBox">${txt}</div>
      <div class="repReadMore" style="display: none;" onclick="readMore(this)">Read more</div>
      <div class="repReadLess" onclick="readLess(this)">Show less</div>
      `
    }

    <!-- White space -->
    <div style="width: 100%; height: 1rem;"></div>
    <div class="likeDislikeComment">
      <div class="tUp" onclick="tUpMock(this)" style="color: #909090;">
        <i
          class="fa fa-thumbs-up"
          style="font-size: 1.3rem;"
          aria-hidden="true"
        ></i>
        <span class="tUptooltiptext">Like</span>
      </div>
      <!-- &nbsp;&nbsp;&nbsp; -->
      <div class="tUpCount" style="display: none;">0</div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="tDown" onclick="tDownMock(this)" style="color: #909090;">
        <i
          class="fa fa-thumbs-down"
          style="font-size: 1.3rem; transform: scale(-1, 1);"
          aria-hidden="true"
        ></i
        ><span class="tDowntooltiptext">Dislike</span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div style="cursor: pointer;" class="replyReplyComment" onclick="replyToComment(this)">
        REPLY
      </div>
    </div>
    <div id="toWhom" style="padding-top: 2vh; font-size: 1.5vh; display: none"></div>
    <!-- Write comment section -->
    <div class="replyAddReply">
      <div class="userProfileFrame">
        <img
          class="userProfilePicFrame"
          style="width: 30px; height: 30px; margin-top: 0.6rem;"
          src="${profilePicture}"
        />
      </div>
      <div class="addCommentRight">
        <textarea
          placeholder="Add a public comment..."
          class="commentInput"
          onfocus="textExpand(this)"
        ></textarea>
        <div class="runderline"></div>
        <div id="replyReplyButtonBox">
          <div class="replyReplyCancelButton" onclick="replyCancelWithComment(this)">
            CANCEL
          </div>
          <div id="commentButton" onclick="newReplyComment(this)">
            COMMENT
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `);

      $(e).parent().prev().prev().val("");
      $(e).parent().prev().prev().css("height", "2rem");
      $(e).parent().parent().parent().css("display", "none");
      //showReplies($(e).parent().parent().parent().next().next().next().next());
    });

    // if ($(".replyCommentBox").height() < 134.391) {
    //   $(".repReadMore").css("display", "none");
    // } else {
    //   $(".replyCommentBox").css("height", "6em");
    // }
  }
}

function newReplyComment(e) {
  var txt = $(e).parent().prev().prev().val();
  var name = $(e)
    .parent()
    .parent()
    .parent()
    .prev()
    .prev()
    .prev()
    .prev()
    .prev()
    .prev()
    .prev()
    .prev()
    .children(":first")
    .children(":first")
    .html();
  var videoID = $(e)
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .prev()
    .prev()
    .attr("id");
  if (videoID === undefined) {
    videoID = $(e)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .prev()
      .attr("id");
  }
  var createSort = $(e)
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .prev()
    .attr("id");
  if (createSort === undefined) {
    createSort = $(e)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .prev()
      .prev()
      .prev()
      .prev()
      .attr("id");
  }
  var url = `${reg}/dev/replyToMainComment/${videoID}/timeStamp/${createSort}`;

  if (txt.replace(/(\s|\r\n|\n)/g, "").length) {
    txt = encodeHTML(txt);
    //txt = txt.replace(/(\r\n|\n)/g, "<br />");
    var settings = {
      url: url,
      method: "PUT",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        profilePicture: `${profilePicture}`,
        user: { firstName: `${firstName}`, lastName: `${lastName}` },
        body:
          "<span style='color:rgb(8, 96, 212)'>" +
          "@" +
          name +
          "</span>" +
          " " +
          txt,
      }),
    };

    $.ajax(settings).done(function (response) {
      //console.log(response);
      $(e).parent().parent().parent().parent().parent().parent().prepend(`
    <div class="replyOnComment">
  <div class="replyOnCommentProfileFrame">
    <img
      class="replyOnCommentProfilePicFrame"
      style="margin-top: 1rem;"
      src="${profilePicture}"
    />
  </div>
  <div class="replyOnCommentRight" style="margin: 1.5rem;">
    <div class="nameAndTime">
      <div style="letter-spacing: 0.03rem;">
        <b>${firstName} ${lastName}</b>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div style="color: #909090;">
        ${timeSince(Date.now())} ago
      </div>
    </div>
    <!-- White space -->
    <div style="width: 100%; height: 1rem;"></div>
    ${
      brInStr(txt) > 3
        ? `
      <div class="replyCommentBox" style="height: 4.3em;"><span style='color:rgb(8, 96, 212)'>@${name}</span> ${txt}</div>
      <div class="repReadMore" onclick="readMore(this)">Read more</div>
      <div class="repReadLess" onclick="readLess(this)">Show less</div>
      `
        : `
        <div class="replyCommentBox"><span style='color:rgb(8, 96, 212)'>@${name}</span> ${txt}</div>
        <div class="repReadMore" style="display: none;" onclick="readMore(this)">Read more</div>
        <div class="repReadLess" onclick="readLess(this)">Show less</div>
        `
    }

    <!-- White space -->
    <div style="width: 100%; height: 1rem;"></div>
    <div class="likeDislikeComment">
      <div class="tUp" onclick="tUpMock(this)" style="color: #909090;">
        <i
          class="fa fa-thumbs-up"
          style="font-size: 1.3rem;"
          aria-hidden="true"
        ></i>
        <span class="tUptooltiptext">Like</span>
      </div>
      <!-- &nbsp;&nbsp;&nbsp; -->
      <div class="tUpCount" style="display: none">0</div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div class="tDown" onclick="tDownMock(this)" style="color: #909090;">
        <i
          class="fa fa-thumbs-down"
          style="font-size: 1.3rem; transform: scale(-1, 1);"
          aria-hidden="true"
        ></i
        ><span class="tDowntooltiptext">Dislike</span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div
        style="cursor: pointer;"
        class="replyReplyComment"
        onclick="replyToComment(this)"
      >
        REPLY
      </div>
    </div>
    <div id="toWhom" style="padding-top: 2vh; font-size: 1.5vh; display: none"></div>
    <!-- Write comment section -->
    <div class="replyAddReply">
      <div class="userProfileFrame">
        <img
          class="userProfilePicFrame"
          style="width: 30px; height: 30px; margin-top: 0.6rem;"
          src="${profilePicture}"
        />
      </div>
      <div class="addCommentRight">
        <textarea
          placeholder="Add a public comment..."
          class="commentInput"
          onfocus="textExpand(this)"
        ></textarea>
        <div class="runderline"></div>
        <div id="replyReplyButtonBox">
          <div class="replyReplyCancelButton" onclick="replyCancelWithComment(this)">
            CANCEL
          </div>
          <div id="commentButton" onclick="newReplyComment(this)">
            COMMENT
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    `);
      $(e).parent().prev().prev().val("");
      $(e).parent().prev().prev().css("height", "2rem");
      $(e).parent().parent().parent().css("display", "none");
      $(e).parent().parent().parent().prev().html("");
    });
    // if ($(".replyCommentBox").height() < 134.391) {
    //   $(".repReadMore").css("display", "none");
    // } else {
    //   $(".replyCommentBox").css("height", "6em");
    // }
  }
}

function showReplies(e) {
  $(e).next().next().css("display", "flex");
  $(e).css("display", "none");
  $(e).next().css("display", "flex");
}

function hideReplies(e) {
  $(e).next().css("display", "none");
  $(e).css("display", "none");
  $(e).prev().css("display", "flex");
}

function readMore(e) {
  var reducedHeight = $(e).prev().height();
  $(e).prev().css("height", "auto");
  var fullHeight = $(e).prev().height();
  $(e).prev().height(reducedHeight);
  $(e).prev().animate({ height: fullHeight }, 0);
  $(e).css("display", "none");
  $(e).next().css("display", "inline");
}

function readLess(e) {
  $(e).prev().prev().css("height", "4.3em");
  $(e).css("display", "none");
  $(e).prev().css("display", "inline");
}

function reply(e) {
  if ($(e).parent().prev().attr("id") === "toEditAComment") {
    $(e).parent().prev().remove();
  }
  $(e).parent().next().css("display", "flex");
  $(e).parent().next().children().eq(1).children().eq(0)[0].focus();
}

function replyToComment(e) {
  $(e).parent().next().next().css("display", "flex");
  $(e).parent().next().next().children().eq(1).children().eq(0)[0].focus();
  $(e)
    .parent()
    .next()
    .html(
      `Replying to ${
        $(e)
          .parent()
          .prev()
          .prev()
          .prev()
          .prev()
          .prev()
          .prev()
          .children()
          .eq(0)
          .children()
          .eq(0)[0].innerHTML
      }`
    );
  $(e).parent().next().css("display", "flex");
}

function replyCancel(e) {
  $(e).parent().parent().parent().css("display", "none");
  $(e).parent().prev().prev().css("height", "2em");
  $(e).parent().prev().prev().val("");
}

function replyCancelWithComment(e) {
  $(e).parent().parent().parent().css("display", "none");
  $(e).parent().prev().prev().css("height", "2em");
  $(e).parent().prev().prev().val("");
  $(e).parent().parent().parent().prev().html("");
  $(e).parent().parent().parent().prev().css("display", "none");
}

function tUp(e) {
  var color = $(e).css("color");
  var videoID = $(e).parent().next().next().attr("id");
  var createSort = $(e).parent().next().next().next().attr("id");

  switch (color) {
    case "rgb(144, 144, 144)":
      $(e).css("color", "rgb(8, 96, 212)");
      var num = $(e).next()[0].innerHTML;
      $(e).next()[0].innerHTML = Number(num) + 1;
      var settings = {
        url: `${reg}/dev/like/${videoID}/timeStamp/${createSort}`,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ id: `${uniqueID}` }),
      };

      if ($(e).next().next().css("color") == "rgb(8, 96, 212)") {
        $(e).next().next().css("color", "rgb(144, 144, 144)");
        var inner = {
          url: `${reg}/dev/unDisLikeWithout/${videoID}/timeStamp/${createSort}`,
          method: "PUT",
          timeout: 0,
        };
        $.ajax(inner).done(function (response) {
          //console.log(response);
        });
      }

      $.ajax(settings).done(function (response) {
        //console.log(response);
      });
      break;
    case "rgb(8, 96, 212)":
      $(e).css("color", "rgb(144, 144, 144)");
      var num = $(e).next()[0].innerHTML;
      $(e).next()[0].innerHTML = Number(num) - 1;
      $(e).next().next().css("color", "rgb(144, 144, 144)");
      var settings = {
        url: `${reg}/dev/unLike/${videoID}/timeStamp/${createSort}`,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ id: `${uniqueID}` }),
      };

      $.ajax(settings).done(function (response) {
        //console.log(response);
      });
      break;
  }
}

function tDown(e) {
  var color = $(e).css("color");
  var videoID = $(e).parent().next().next().attr("id");
  var createSort = $(e).parent().next().next().next().attr("id");

  switch (color) {
    case "rgb(144, 144, 144)":
      $(e).css("color", "rgb(8, 96, 212)");
      var settings = {
        url: `${reg}/dev/disLike/${videoID}/timeStamp/${createSort}`,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ id: `${uniqueID}` }),
      };

      if ($(e).prev().prev().css("color") == "rgb(8, 96, 212)") {
        $(e).prev().prev().css("color", "rgb(144, 144, 144)");
        var num = $(e).prev()[0].innerHTML;
        $(e).prev()[0].innerHTML = Number(num) - 1;

        var inner = {
          url: `${reg}/dev/unLikeWithout/${videoID}/timeStamp/${createSort}`,
          method: "PUT",
          timeout: 0,
        };

        $.ajax(inner).done(function (response) {
          //console.log(response);
        });
      }

      $.ajax(settings).done(function (response) {
        //console.log(response);
      });
      break;
    case "rgb(8, 96, 212)":
      $(e).css("color", "rgb(144, 144, 144)");

      var settings = {
        url: `${reg}/dev/unDisLike/${videoID}/timeStamp/${createSort}`,
        method: "PUT",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ id: `${uniqueID}` }),
      };

      $.ajax(settings).done(function (response) {
        //console.log(response);
      });
      break;
  }
}

function tUpMock(e) {
  var color = $(e).css("color");
  switch (color) {
    case "rgb(144, 144, 144)":
      $(e).css("color", "rgb(8, 96, 212)");
      var num = $(e).next()[0].innerHTML;
      $(e).next()[0].innerHTML = Number(num) + 1;
      $(e).next().next().css("color", "rgb(144, 144, 144)");
      break;
    case "rgb(8, 96, 212)":
      $(e).css("color", "rgb(144, 144, 144)");
      var num = $(e).next()[0].innerHTML;
      $(e).next()[0].innerHTML = Number(num) - 1;
      $(e).next().next().css("color", "rgb(144, 144, 144)");
      break;
  }
}

function tDownMock(e) {
  var color = $(e).css("color");
  switch (color) {
    case "rgb(144, 144, 144)":
      $(e).css("color", "rgb(8, 96, 212)");
      if ($(e).prev().prev().css("color") == "rgb(8, 96, 212)") {
        $(e).prev().prev().css("color", "rgb(144, 144, 144)");
        var num = $(e).prev()[0].innerHTML;
        $(e).prev()[0].innerHTML = Number(num) - 1;
      }
      break;
    case "rgb(8, 96, 212)":
      $(e).css("color", "rgb(144, 144, 144)");
      break;
  }
}
