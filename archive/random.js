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
