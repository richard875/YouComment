document.querySelector("#signOut").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "logout" }, function (response) {
    if (response === "success") {
      window.close();
    }
  });
});
