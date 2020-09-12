// // Targets all textareas with class "commentInput"
// let textareas = document.querySelectorAll(".commentInput"),
//   hiddenDiv = document.createElement("div"),
//   content = null;

// // Adds a class to all textareas
// for (let j of textareas) {
//   j.classList.add("txtstuff");
// }

// // Build the hidden div's attributes

// // The line below is needed if you move the style lines to CSS
// // hiddenDiv.classList.add('hiddendiv');

// // Add the "commentInput" styles, which are common to both textarea and hiddendiv
// // If you want, you can remove those from CSS and add them via JS
// hiddenDiv.classList.add("commentInput");

// // Add the styles for the hidden div
// // These can be in the CSS, just remove these three lines and uncomment the CSS
// hiddenDiv.style.display = "none";
// hiddenDiv.style.whiteSpace = "pre-wrap";
// hiddenDiv.style.wordWrap = "break-word";

// // Loop through all the textareas and add the event listener
// for (let i of textareas) {
//   (function (i) {
//     // Note: Use 'keyup' instead of 'input'
//     // if you want older IE support
//     i.addEventListener("input", function () {
//       // Append hiddendiv to parent of textarea, so the size is correct
//       i.parentNode.appendChild(hiddenDiv);

//       // Remove this if you want the user to be able to resize it in modern browsers
//       i.style.resize = "none";

//       // This removes scrollbars
//       i.style.overflow = "hidden";

//       // Every input/change, grab the content
//       content = i.value;

//       // Add the same content to the hidden div

//       // This is for old IE
//       content = content.replace(/\n/g, "<br>");

//       // The <br ..> part is for old IE
//       // This also fixes the jumpy way the textarea grows if line-height isn't included
//       hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

//       // Briefly make the hidden div block but invisible
//       // This is in order to read the height
//       hiddenDiv.style.visibility = "hidden";
//       hiddenDiv.style.display = "block";
//       i.style.height = hiddenDiv.offsetHeight + "px";

//       // Make the hidden div display:none again
//       hiddenDiv.style.visibility = "visible";
//       hiddenDiv.style.display = "none";
//     });
//   })(i);
// }

// Start from here

// var bigCont = document.getElementById("bigCont");

// $("#commentButton").click(function myFunction() {
//   var commentSection = document.getElementById("commentSection");
//   var txt = $("#commentInput").val();

//   if (txt.replace(/(\s|\r\n|\n)/g, "").length) {
//     $("#commentSection").prepend(
//       '<!-- Each comments --><div class="comments"> <div class="commentProfileFrame"> <img class="userProfilePicFrame" style="margin-top: 1rem;" src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88" /> </div> <div class="commentRight"> <div class="nameAndTime"> <div style="letter-spacing: 0.03rem;"><b>Richard Lee</b></div> <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> <div style="color: #909090;">1 day ago</div> </div> <!-- White space --> <div style="width: 100%; height: 1rem;"></div> <div class="preUserCommentBox">' +
//         txt.replace(/(\r\n|\n)/g, "<br/>") +
//         '</div> <div class="preComReadMore">Read more</div> <div class="preComReadLess">Show less</div> <!-- White space --> <div style="width: 100%; height: 1rem;"></div> <div class="likeDislikeComment"> <div class="tUp" style="color: #909090;"> <i class="fa fa-thumbs-up" style="font-size: 1.3rem;" aria-hidden="true" ></i> <span class="tUptooltiptext">Like</span> </div> &nbsp;&nbsp;&nbsp; <div class="tUpCount">5</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="tDown" style="color: #909090;"> <i class="fa fa-thumbs-down" style="font-size: 1.3rem; transform: scale(-1, 1);" aria-hidden="true" ></i ><span class="tDowntooltiptext">Dislike</span> </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div style="cursor: pointer;" class="replyComment">REPLY</div> </div> <!-- 1 --> <div class="replyAddComment"> <div class="userProfileFrame"> <img class="userProfilePicFrame" style="width: 30px; margin-top: 0.6rem;" src="https://lh3.googleusercontent.com/a-/AOh14GhCDmxhE1GHV9lIgPTf4jTGr-pEsIxh4m7b6Oz0DQ=s88" /> </div> <div class="addCommentRight"> <textarea placeholder="Add a public reply..." class="commentInput" ></textarea> <div class="runderline"></div> <div id="replyCommentButtonBox"> <div class="replyCancelButton"> CANCEL </div> <div id="commentButton" style="width: 80px;"> REPLY </div> </div> </div> </div> <!-- White space --> <div style="width: 100%; height: 1rem;"></div> <div class="preAllReplyOnComment"></div> </div></div>'
//     );

//     $("#commentInput").val("");
//     $("#commentInput").css("height", "2rem");
//     $("#commentButtonBox").css("display", "none");
//   }
//   var allPreUserCommentBox = commentSection.getElementsByClassName(
//     "preUserCommentBox"
//   );
//   var allPreComReadMore = commentSection.getElementsByClassName(
//     "preComReadMore"
//   );
//   var allPreComReadLess = commentSection.getElementsByClassName(
//     "preComReadLess"
//   );

//   Array.from(allPreUserCommentBox).forEach(function (x, i) {
//     console.log($(x).height());
//     if ($(x).height() < 134.391) {
//       Array.from(allPreComReadMore)[i].style.display = "none";
//     } else {
//       x.style.height = "6em";
//     }
//   });

//   Array.from(allPreComReadMore).forEach(function (x, i) {
//     // console.log(x);
//     $(x).click(function () {
//       var reducedHeight = $(Array.from(allPreUserCommentBox)[i]).height();
//       // console.log(i);
//       console.log(x);
//       // console.log(Array.from(allPreUserCommentBox)[i]);
//       $(Array.from(allPreUserCommentBox)[i]).css("height", "auto");
//       var fullHeight = $(Array.from(allPreUserCommentBox)[i]).height();
//       // console.log(fullHeight);
//       $(Array.from(allPreUserCommentBox)[i]).height(reducedHeight);
//       $(Array.from(allPreUserCommentBox)[i]).animate({ height: fullHeight }, 0);
//       $(x).css("display", "none");
//       $(Array.from(allPreComReadLess)[i]).css("display", "inline");
//     });
//   });
// Array.from(allPreComReadLess).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allPreUserCommentBox)[i]).css("height", "6em");
//     $(Array.from(allPreComReadLess)[i]).css("display", "none");
//     $(Array.from(allPreComReadMore)[i]).css("display", "inline");
//   });
// });

// Temp Hide
// Array.from(allPreComReadMore).forEach(function (x, i) {
//   // console.log(x);
//   $(x).click(function () {
//     var reducedHeight = $(Array.from(allPreUserCommentBox)[i]).height();

//     $(Array.from(allPreUserCommentBox)[i]).css("height", "auto");
//     var fullHeight = $(Array.from(allPreUserCommentBox)[i]).height();
//     // console.log(fullHeight);
//     $(Array.from(allPreUserCommentBox)[i]).height(reducedHeight);
//     $(Array.from(allPreUserCommentBox)[i]).animate({ height: fullHeight }, 0);
//     $(x).css("display", "none");
//     $(Array.from(allPreComReadLess)[i]).css("display", "inline");
//   });
// });
// Array.from(allPreComReadLess).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allPreUserCommentBox)[i]).css("height", "6em");
//     $(Array.from(allPreComReadLess)[i]).css("display", "none");
//     $(Array.from(allPreComReadMore)[i]).css("display", "inline");
//   });
// });
// Temp Hide
//});

// function textAreaFocus() {
//   $("#commentButtonBox").css("display", "flex");
//   $("#commentInput").css("height", "2rem");
// }

// $("#cancelButton").click(function () {
//   $("#commentButtonBox").css("display", "none");
//   $("#commentInput").css("height", "2rem");
//   $("#commentInput").val("");
// });

// var allTUp = bigCont.getElementsByClassName("tUp");
// var allTDown = bigCont.getElementsByClassName("tDown");
// var allTUpCount = bigCont.getElementsByClassName("tUpCount");
// var allReplyComment = bigCont.getElementsByClassName("replyComment");
// var allReplyAddComment = bigCont.getElementsByClassName("replyAddComment");
// var allReplyCancelButton = bigCont.getElementsByClassName("replyCancelButton");
// var allReplyReplyComment = bigCont.getElementsByClassName("replyReplyComment");
// var allReplyAddReply = bigCont.getElementsByClassName("replyAddReply");
// var allReplyReplyCancelButton = bigCont.getElementsByClassName(
//   "replyReplyCancelButton"
// );

// Array.from(allTUp).forEach(function (x, i) {
//   $(x).click(function () {
//     var color = x.style.color;
//     switch (color) {
//       case "rgb(144, 144, 144)":
//         x.style.color = "rgb(8, 96, 212)";
//         Array.from(allTUpCount)[i].innerHTML =
//           Number(Array.from(allTUpCount)[i].innerHTML) + 1;
//         Array.from(allTDown)[i].style.color = "rgb(144, 144, 144)";
//         break;
//       case "rgb(8, 96, 212)":
//         Array.from(allTUpCount)[i].innerHTML =
//           Number(Array.from(allTUpCount)[i].innerHTML) - 1;
//         x.style.color = "rgb(144, 144, 144)";
//         break;
//     }
//   });
// });

// Array.from(allTDown).forEach(function (x, i) {
//   var likedNum = Array.from(allTUpCount)[i].innerHTML;
//   $(x).click(function () {
//     var color = x.style.color;
//     switch (color) {
//       case "rgb(144, 144, 144)":
//         x.style.color = "rgb(8, 96, 212)";
//         Array.from(allTUpCount)[i].innerHTML = likedNum;
//         Array.from(allTUp)[i].style.color = "rgb(144, 144, 144)";
//         break;
//       case "rgb(8, 96, 212)":
//         x.style.color = "rgb(144, 144, 144)";
//         break;
//     }
//   });
// });

// Array.from(allReplyComment).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allReplyAddComment)[i]).css("display", "flex");
//   });
// });

// Array.from(allReplyCancelButton).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allReplyAddComment)[i]).css("display", "none");
//   });
// });

// Array.from(allReplyReplyComment).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allReplyAddReply)[i]).css("display", "flex");
//   });
// });

// Array.from(allReplyReplyCancelButton).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allReplyAddReply)[i]).css("display", "none");
//   });
// });

// var allUserCommentBox = bigCont.getElementsByClassName("userCommentBox");
// var allComReadMore = bigCont.getElementsByClassName("comReadMore");
// var allComReadLess = bigCont.getElementsByClassName("comReadLess");
// var allShowReplies = bigCont.getElementsByClassName("showReplies");
// var allHideReplies = bigCont.getElementsByClassName("hideReplies");
// var allAllReplyOnComment = bigCont.getElementsByClassName("allReplyOnComment");

// Array.from(allUserCommentBox).forEach(function (x, i) {
//   console.log($(x).height());
//   if ($(x).height() < 134.391) {
//     Array.from(allComReadMore)[i].style.display = "none";
//     console.log("if");
//   } else {
//     x.style.height = "6em";
//     console.log("else");
//   }
// });

// Array.from(allComReadMore).forEach(function (x, i) {
//   // console.log(x);
//   $(x).click(function () {
//     var reducedHeight = $(Array.from(allUserCommentBox)[i]).height();
//     // console.log(reducedHeight);
//     $(Array.from(allUserCommentBox)[i]).css("height", "auto");
//     var fullHeight = $(Array.from(allUserCommentBox)[i]).height();
//     // console.log(fullHeight);
//     $(Array.from(allUserCommentBox)[i]).height(reducedHeight);
//     $(Array.from(allUserCommentBox)[i]).animate({ height: fullHeight }, 0);
//     $(x).css("display", "none");
//     $(Array.from(allComReadLess)[i]).css("display", "inline");
//   });
// });

// Array.from(allComReadLess).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allUserCommentBox)[i]).css("height", "6em");
//     $(Array.from(allComReadLess)[i]).css("display", "none");
//     $(Array.from(allComReadMore)[i]).css("display", "inline");
//   });
// });

// Array.from(allShowReplies).forEach(function (x, i) {
//   $(x).click(function () {
// $(Array.from(allAllReplyOnComment)[i]).css("display", "flex");
// $(x).css("display", "none");
// $(Array.from(allHideReplies)[i]).css("display", "flex");

// var thisReply = Array.from(allAllReplyOnComment)[i];
// var allReplyCommentBox = thisReply.getElementsByClassName(
//   "replyCommentBox"
// );
// var allRepReadMore = thisReply.getElementsByClassName("repReadMore");
// var allRepReadLess = thisReply.getElementsByClassName("repReadLess");

// Array.from(allReplyCommentBox).forEach(function (z, i) {
//   console.log($(z).height());
//   if ($(z).height() < 120) {
//     $(Array.from(allRepReadMore)[i]).css("display", "none");
//   } else {
//     $(z).css("height", "6em");
//   }
// });

// Array.from(allRepReadMore).forEach(function (a, i) {
//   $(a).click(function () {
//     var repreducedHeight = $(Array.from(allReplyCommentBox)[i]).height();
//     $(Array.from(allReplyCommentBox)[i]).css("height", "auto");
//     console.log(repreducedHeight);
//     var repfullHeight = $(Array.from(allReplyCommentBox)[i]).height();
//     $(Array.from(allReplyCommentBox)[i]).height(repreducedHeight);
//     $(Array.from(allReplyCommentBox)[i]).animate(
//       { height: repfullHeight },
//       0
//     );
//     $(a).css("display", "none");
//     $(Array.from(allRepReadLess)[i]).css("display", "inline");
//   });
// });

// Array.from(allRepReadLess).forEach(function (b, i) {
//   $(b).click(function () {
//     $(Array.from(allReplyCommentBox)[i]).css("height", "6em");
//     $(b).css("display", "none");
//     $(Array.from(allRepReadMore)[i]).css("display", "inline");
//   });
// });
//   });
// });

// Array.from(allHideReplies).forEach(function (x, i) {
//   $(x).click(function () {
//     $(Array.from(allAllReplyOnComment)[i]).css("display", "none");
//     $(x).css("display", "none");
//     $(Array.from(allShowReplies)[i]).css("display", "flex");
//   });
// });

// New ones
// $("#comReadMore${comment.id}").click(function () {
//   var reducedHeight = $("#userCommentBox${comment.id}").height();
//   $("#userCommentBox${comment.id}").css("height", "auto");
//   var fullHeight = $("#userCommentBox${comment.id}").height();
//   $("#userCommentBox${comment.id}").height(reducedHeight);
//   $("#userCommentBox${comment.id}").animate({ height: fullHeight }, 0);
//   $("#comReadMore${comment.id}").css("display", "none");
//   $("#comReadLess${comment.id}").css("display", "inline");
// });

// $("#comReadLess${comment.id}").click(function () {
//   $("#userCommentBox${comment.id}").css("height", "6em");
//   $("#comReadLess${comment.id}").css("display", "none");
//   $("#comReadMore${comment.id}").css("display", "inline");
// });

// $("#tUp${comment.id}").click(function () {
//   var color = $("#tUp${comment.id}").css("color");
//   switch (color) {
//     case "rgb(144, 144, 144)":
//       $("#tUp${comment.id}").css("color", "rgb(8, 96, 212)");
//       var num = document.getElementById("tUpCount${comment.id}").innerHTML;
//       document.getElementById("tUpCount${comment.id}").innerHTML = Number(num) + 1;
//       $("#tDown${comment.id}").css("color", "rgb(144, 144, 144)");
//       break;
//     case "rgb(8, 96, 212)":
//       var num = document.getElementById("tUpCount${comment.id}").innerHTML;
//       document.getElementById("tUpCount${comment.id}").innerHTML = Number(num) - 1;
//       $("#tUp${comment.id}").css("color", "rgb(144, 144, 144)");
//       break;
//   }
// });

// var likedNum${comment.id} = document.getElementById("tUpCount${comment.id}").innerHTML;
// $("#tDown${comment.id}").click(function () {
//   var color = $("#tDown${comment.id}").css("color");
//   switch (color) {
//     case "rgb(144, 144, 144)":
//       $("#tDown${comment.id}").css("color", "rgb(8, 96, 212)");
//       document.getElementById("tUpCount${comment.id}").innerHTML = likedNum${comment.id};
//       $("#tUp${comment.id}").css("color", "rgb(144, 144, 144)");
//       break;
//     case "rgb(8, 96, 212)":
//       $("#tDown${comment.id}").css("color", "rgb(144, 144, 144)");
//       break;
//   }
// });

// $("#replyComment${comment.id}").click(function () {
//   $("#replyAddComment${comment.id}").css("display", "flex");
// });

// $("#replyCancelButton${comment.id}").click(function () {
//   $("#replyAddComment${comment.id}").css("display", "none");
// });

// $("#${comment.id}repReadMore${reply.replyId}").click(function () {
//   var repreducedHeight = $(
//     "#${comment.id}replyCommentBox${reply.replyId}"
//   ).height();
//   $("#${comment.id}replyCommentBox${reply.replyId}").css("height", "auto");
//   var repfullHeight = $(
//     "#${comment.id}replyCommentBox${reply.replyId}"
//   ).height();
//   $("#${comment.id}replyCommentBox${reply.replyId}").height(
//     repreducedHeight
//   );
//   $("#${comment.id}replyCommentBox${reply.replyId}").animate(
//     { height: repfullHeight },
//     0
//   );
//   $("#${comment.id}repReadMore${reply.replyId}").css("display", "none");
//   $("#${comment.id}repReadLess${reply.replyId}").css("display", "inline");
// });

// $("#${comment.id}repReadLess${reply.replyId}").click(function () {
//   $("#${comment.id}replyCommentBox${reply.replyId}").css("height", "6em");
//   $("#${comment.id}repReadLess${reply.replyId}").css("display", "none");
//   $("#${comment.id}repReadMore${reply.replyId}").css("display", "inline");
// });

// $("#${comment.id}tUp${reply.replyId}").click(function () {
//   console.log("123");
//   var color = $("#${comment.id}tUp${reply.replyId}").css("color");
//   switch (color) {
//     case "rgb(144, 144, 144)":
//       $("#${comment.id}tUp${reply.replyId}").css("color", "rgb(8, 96, 212)");
//       var num = document.getElementById("${comment.id}tUpCount${reply.replyId}")
//         .innerHTML;
//       document.getElementById(
//         "${comment.id}tUpCount${reply.replyId}"
//       ).innerHTML = Number(num) + 1;
//       $("#${comment.id}tDown${reply.replyId}").css(
//         "color",
//         "rgb(144, 144, 144)"
//       );
//       break;
//     case "rgb(8, 96, 212)":
//       var num = document.getElementById("${comment.id}tUpCount${reply.replyId}")
//         .innerHTML;
//       document.getElementById(
//         "${comment.id}tUpCount${reply.replyId}"
//       ).innerHTML = Number(num) - 1;
//       $("#${comment.id}tUp${reply.replyId}").css("color", "rgb(144, 144, 144)");
//       break;
//   }
// });

// var likedNum${reply.replyId}num${comment.id} = document.getElementById("${comment.id}tUpCount${reply.replyId}").innerHTML;
// $("#${comment.id}tDown${reply.replyId}").click(function () {
//   var color = $("#${comment.id}tDown${reply.replyId}").css("color");
//   switch (color) {
//     case "rgb(144, 144, 144)":
//       $("#${comment.id}tDown${reply.replyId}").css("color", "rgb(8, 96, 212)");
//       document.getElementById("${comment.id}tUpCount${reply.replyId}").innerHTML = likedNum${reply.replyId}num${comment.id}
//       $("#${comment.id}tUp${reply.replyId}").css("color", "rgb(144, 144, 144)");
//       break;
//     case "rgb(8, 96, 212)":
//       $("#${comment.id}tDown${reply.replyId}").css("color","rgb(144, 144, 144)");
//       break;
//   }
// });

// $("#${comment.id}replyReplyComment${reply.replyId}").click(function () {
//   $("#${comment.id}replyAddReply${reply.replyId}").css("display", "flex");
// });

// $("#${comment.id}replyReplyCancelButton${reply.replyId}").click(function () {
//   $("#${comment.id}replyAddReply${reply.replyId}").css("display", "none");
// });
