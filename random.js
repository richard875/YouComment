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

// var aDay = 24 * 60 * 60 * 1000;
// console.log(timeSince(new Date(Date.now() - aDay)) + " ago");
// console.log(timeSince(new Date(Date.now() - aDay * 2)) + " ago");
// console.log(timeSince(Date.parse("2018-08-22T02:04:08.153Z")) + " ago");

// Targets all textareas with class "commentInput"
let textareas = document.querySelectorAll(".commentInput"),
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
hiddenDiv.classList.add("commentInput");

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

// Dummy Data

var fakeDate = {
  totalResults: 2,
  comments: [
    {
      id: 1,
      createdAt: "2020-07-06T02:04:08.153Z",
      user: { firstName: "Russell", lastName: "Bloxwich" },
      profilePicture:
        "https://scontent.fakl1-2.fna.fbcdn.net/v/t1.0-1/p200x200/42405816_2409305592417947_7123017326986788864_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=D1SLwPRsqCcAX_3FObl&_nc_ht=scontent.fakl1-2.fna&_nc_tp=6&oh=0c16ef3f9742e52207c951c1bf5bb867&oe=5F4034ED",
      review: { likes: 0, dislikes: 0 },
      body:
        "I really like this video!<br />This is the best!<br />1<br />2<br />3",
      replies: [
        {
          replyId: 1,
          createdAt: "2020-07-10T02:04:08.153Z",
          user: { firstName: "Russell", lastName: "DM" },
          profilePicture:
            "https://scontent.fakl1-2.fna.fbcdn.net/v/t1.0-1/p200x200/116209451_3815084151853414_4715784425846169697_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=NwJujnjkjm4AX_4QKBK&_nc_ht=scontent.fakl1-2.fna&_nc_tp=6&oh=62c704291a3aba9328782845f7660a15&oe=5F3F416C",
          review: { likes: 0, dislikes: 0 },
          body: "Nice video!<br />Good stuff!",
        },
        {
          replyId: 2,
          createdAt: "2020-07-10T02:04:08.153Z",
          user: { firstName: "Jennifer", lastName: "Lawence" },
          profilePicture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jennifer_Lawrence_SDCC_2015_X-Men.jpg/440px-Jennifer_Lawrence_SDCC_2015_X-Men.jpg",
          review: { likes: 0, dislikes: 0 },
          body: "1<br />2<br />3<br />4<br />5<br />6",
        },
      ],
    },
    {
      id: 2,
      createdAt: "2020-07-15T02:04:08.153Z",
      user: { firstName: "Justin", lastName: "Bieber" },
      profilePicture:
        "https://www.gannett-cdn.com/presto/2020/01/28/USAT/107a7fa1-22e7-4878-870d-a959c3f78acd-AFP_AFP_1OG6IB.JPG?width=660&height=495&fit=crop&format=pjpg&auto=webp",
      review: { likes: 0, dislikes: 0 },
      body: "Nice!<br />Hiii<br />Yes!",
      replies: [],
    },
  ],
};

var newId = Object.keys(fakeDate).length;
console.log("It has " + newId + " comments");

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

  if (txt.replace(/(\s|\r\n|\n)/g, "").length) {
    $("#commentSection").prepend(`
  <!-- Each comments -->
    <div class="comments">
      <div class="commentProfileFrame">
        <img
          class="userProfilePicFrame"
          style="margin-top: 1rem;"
          src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88"
        />
      </div>
      <div class="commentRight">
        <div class="nameAndTime">
          <div style="letter-spacing: 0.03rem;">
            <b>Richard Lee</b>
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div style="color: #909090;">
            ${timeSince(Date.now())} ago
          </div>
        </div>
        <!-- White space -->
        <div style="width: 100%; height: 1rem;"></div>
        <div class="userCommentBox" id="userCommentBox${newId + 1}">
          ${txt.replace(/(\r\n|\n)/g, "<br/>")}
        </div>
        <div class="comReadMore" id="comReadMore${
          newId + 1
        }" onclick="readMore(this)">Read more</div>
        <div class="comReadLess" id="comReadLess${
          newId + 1
        }" onclick="readLess(this)">Show less</div>
        <!-- White space -->
        <div style="width: 100%; height: 1rem;"></div>
        <div class="likeDislikeComment">
          <div class="tUp" id="tUp${
            newId + 1
          }" onclick="tUp(this)" style="color: #909090;">
            <i
              class="fa fa-thumbs-up"
              style="font-size: 1.3rem;"
              aria-hidden="true"
            ></i>
            <span class="tUptooltiptext">Like</span>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div class="tUpCount" id="tUpCount${newId + 1}">0</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="tDown" id="tDown${
            newId + 1
          }" onclick="tDown(this)" style="color: #909090;">
            <i
              class="fa fa-thumbs-down"
              style="font-size: 1.3rem; transform: scale(-1, 1);"
              aria-hidden="true"
            ></i
            ><span class="tDowntooltiptext">Dislike</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style="cursor: pointer;" id="replyComment${
            newId + 1
          }" onclick="reply(this)">REPLY</div>
        </div>
        <!-- 1 -->
        <div class="replyAddComment" id="replyAddComment${newId + 1}">
          <div class="userProfileFrame">
            <img
              class="userProfilePicFrame"
              style="margin-top: 0.6rem;"
              src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88"
            />
          </div>
          <div class="addCommentRight">
            <textarea
              placeholder="Add a public reply..."
              class="commentInput"
            ></textarea>
            <div class="runderline"></div>
            <div id="replyCommentButtonBox">
              <div class="replyCancelButton" id="replyCancelButton${
                newId + 1
              }" onclick="replyCancel(this)">
                CANCEL
              </div>
              <div id="commentButton" style="width: 80px;">
                REPLY
              </div>
            </div>
          </div>
        </div>
        <div id="newComments${newId + 1}"></div>
        </div>
      </div>
    </div>
  `);

    if ($(`#userCommentBox${newId + 1}`).height() < 134.391) {
      $(`#comReadMore${newId + 1}`).css("display", "none");
    } else {
      $(`#userCommentBox${newId + 1}`).css("height", "6em");
    }

    $("#commentInput").val("");
    $("#commentInput").css("height", "2rem");
    $("#commentButtonBox").css("display", "none");

    newId++;
  }
});

var rendered = fakeDate.comments.map((comment) => {
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
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div style="color: #909090;">
            ${timeSince(Date.parse(comment.createdAt))} ago
          </div>
        </div>
        <!-- White space -->
        <div style="width: 100%; height: 1rem;"></div> 
  ${
    brInStr(comment.body) > 3
      ? `
    <div class="userCommentBox" style="height: 6em;" id="userCommentBox${comment.id}">
      ${comment.body}
    </div>
    <div
      class="comReadMore"
      id="comReadMore${comment.id}"
      onclick="readMore(this)"
    >
      Read more
    </div>
    <div
      class="comReadLess"
      id="comReadLess${comment.id}"
      onclick="readLess(this)"
    >
      Show less
    </div>
    `
      : `
    <div class="userCommentBox" id="userCommentBox${comment.id}">
      ${comment.body}
    </div>

    <div
      class="comReadMore"
      id="comReadMore${comment.id}"
      style="display: none;"
      onclick="readMore(this)"
    >
      Read more
    </div>
    <div
      class="comReadLess"
      id="comReadLess${comment.id}"
      onclick="readLess(this)"
    >
      Show less
    </div>
    `
  }
        <!-- White space -->
        <div style="width: 100%; height: 1rem;"></div>
        <div class="likeDislikeComment">
          <div class="tUp" id="tUp${
            comment.id
          }" onclick="tUp(this)" style="color: #909090;">
            <i
              class="fa fa-thumbs-up"
              style="font-size: 1.3rem;"
              aria-hidden="true"
            ></i>
            <span class="tUptooltiptext">Like</span>
          </div>
          &nbsp;&nbsp;&nbsp;
          <div class="tUpCount" id="tUpCount${comment.id}">${
    comment.review.likes
  }</div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="tDown" id="tDown${
            comment.id
          }" onclick="tDown(this)" style="color: #909090;">
            <i
              class="fa fa-thumbs-down"
              style="font-size: 1.3rem; transform: scale(-1, 1);"
              aria-hidden="true"
            ></i
            ><span class="tDowntooltiptext">Dislike</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div style="cursor: pointer;" id="replyComment${
            comment.id
          }" onclick="reply(this)">REPLY</div>
        </div>
        <!-- 1 -->
        <div class="replyAddComment" id="replyAddComment${comment.id}">
          <div class="userProfileFrame">
            <img
              class="userProfilePicFrame"
              style="margin-top: 0.6rem;"
              src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88"
            />
          </div>
          <div class="addCommentRight">
            <textarea
              placeholder="Add a public reply..."
              class="commentInput"
            ></textarea>
            <div class="runderline"></div>
            <div id="replyCommentButtonBox">
              <div class="replyCancelButton" id="replyCancelButton${
                comment.id
              }" onclick="replyCancel(this)">
                CANCEL
              </div>
              <div id="commentButton" style="width: 80px;" onclick="replyOnComment(this)">
                REPLY
              </div>
            </div>
          </div>
        </div>
        <div id="newComments${comment.id}"></div>
        
  `;

  if (!(comment.replies === undefined || comment.replies.length == 0)) {
    singleComment += `
    <div
      class="showReplies"
      id = "showReplies${comment.id}"
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
        } ${Object.keys(comment.replies).length == 1 || 0 ? "reply" : "replies"}
    </div>
    <div
      class="hideReplies"
      id="hideReplies${comment.id}"
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
        } ${Object.keys(comment.replies).length == 1 || 0 ? "reply" : "replies"}
    </div>
    <div class="allReplyOnComment" id="allReplyOnComment${comment.id}">
    <!-- White space -->
    <div style="width: 100%; height: 1rem;"></div>
    `;
    singleComment += comment.replies.map((reply) => {
      return `
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
        <div style="letter-spacing: 0.03rem;"><b>${reply.user.firstName} ${
        reply.user.lastName
      }</b></div>
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
      <div class="replyCommentBox"  style="height: 6em;" id="${comment.id}replyCommentBox${reply.replyId}">${reply.body}</div>
      <div class="repReadMore" id="${comment.id}repReadMore${reply.replyId}"  onclick="readMore(this)">Read more</div>
      <div class="repReadLess" id="${comment.id}repReadLess${reply.replyId}" onclick="readLess(this)">Show less</div>
      `
          : `
          <div class="replyCommentBox" id="${comment.id}replyCommentBox${reply.replyId}">${reply.body}</div>
          <div class="repReadMore" style="display: none;" id="${comment.id}repReadMore${reply.replyId}"  onclick="readMore(this)">Read more</div>
          <div class="repReadLess" id="${comment.id}repReadLess${reply.replyId}" onclick="readLess(this)">Show less</div>
          `
      }
      <!-- White space -->
      <div style="width: 100%; height: 1rem;"></div>
      <div class="likeDislikeComment">
        <div class="tUp" id="${comment.id}tUp${
        reply.replyId
      }" onclick="tUp(this)" style="color: #909090;">
          <i
            class="fa fa-thumbs-up"
            style="font-size: 1.3rem;"
            aria-hidden="true"
          ></i>
          <span class="tUptooltiptext">Like</span>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div class="tUpCount" id="${comment.id}tUpCount${reply.replyId}">${
        reply.review.likes
      }</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="tDown" id="${comment.id}tDown${
        reply.replyId
      }" onclick="tDown(this)" style="color: #909090;">
          <i
            class="fa fa-thumbs-down"
            style="font-size: 1.3rem; transform: scale(-1, 1);"
            aria-hidden="true"
          ></i
          ><span class="tDowntooltiptext">Dislike</span>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div style="cursor: pointer;" class="replyReplyComment" id="${
          comment.id
        }replyReplyComment${reply.replyId}" onclick="reply(this)">
          REPLY
        </div>
      </div>
      <!-- Write comment section -->
      <div class="replyAddReply" id="${comment.id}replyAddReply${
        reply.replyId
      }">
        <div class="userProfileFrame">
          <img
            class="userProfilePicFrame"
            style="width: 30px; height: 30px; margin-top: 0.6rem;"
            src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88"
          />
        </div>
        <div class="addCommentRight">
          <textarea
            placeholder="Add a public comment..."
            class="commentInput"
          ></textarea>
          <div class="runderline"></div>
          <div id="replyReplyButtonBox">
            <div class="replyReplyCancelButton" id="${
              comment.id
            }replyReplyCancelButton${
        reply.replyId
      }" onclick="replyCancel(this)">
              CANCEL
            </div>
            <div id="commentButton">
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

// var renderedJS = fakeDate.comments.map((comment) => {});

$(`#commentSection`).prepend(rendered);
// $(`#importS`).prepend(renderedJS);

//$("#frontJS").prepend(`
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
  $(e).prev().prev().css("height", "6em");
  $(e).css("display", "none");
  $(e).prev().css("display", "inline");
}

function reply(e) {
  $(e).parent().next().css("display", "flex");
}

function replyCancel(e) {
  $(e).parent().parent().parent().css("display", "none");
  $(e).parent().prev().prev().val("");
}

function tUp(e) {
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

function tDown(e) {
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

//  `);
