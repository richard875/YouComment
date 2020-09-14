document.querySelector("#set").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "login" }, function (response) {
    if (response === "success") {
      window.close();
    }
  });
  // var value = $("#fname").val();
  // chrome.extension.getBackgroundPage().console.log(value);
  // chrome.storage.sync.set({ line: value }, function () {
  //   alert("Sucess!");
  // });
});

// document.querySelector("#get").addEventListener("click", function () {
//   chrome.storage.sync.get("line", function (data) {
//     chrome.extension.getBackgroundPage().console.log(data.line);
//   });
// });

// chrome.browserAction.onClicked.addListener(function () {
//   chrome.windows.create({ url: "signOut.html", type: "popup" }, function (
//     window
//   ) {});
// });

// document.querySelector("button").addEventListener("click", function () {
//   chrome.runtime.sendMessage({ message: "isUserSignedIn" }, function (
//     response
//   ) {});
// });
