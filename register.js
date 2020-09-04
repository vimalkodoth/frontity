console.log("service worker register script");
if ("serviceWorker" in navigator) {
  if (document.readyState !== "loading") {
    registerServiceWorker();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      console.log("DOM Content Loaded");
      registerServiceWorker();
    });
  }
}

function registerServiceWorker() {
  navigator.serviceWorker.register("/sw.js").then(
    function (registration) {
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    function (err) {
      console.log("ServiceWorker registration failed: ", err);
    }
  );
}
