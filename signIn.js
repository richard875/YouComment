document.querySelector("#set").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "login" }, function (response) {
    if (response === "success") {
      //$("#hello").html("Hello!!");
      window.close();
    }
  });
  // var value = $("#fname").val();
  // chrome.extension.getBackgroundPage().console.log(value);
  // chrome.storage.sync.set({ line: value }, function () {
  //   alert("Sucess!");
  // });
});
