var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/serviceworker.js", { scope: "/" })
          .then((registration) => {
            registration.unregister().then((boolean) => {
            });
          })
          .catch((error) => {
            
          });
          // Befor install prompt start
          window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          var installDiv = document.getElementById('divInstallApp');
          installDiv.innerHTML = '<button id="installApp" class="btn btn-outline-secondary ms-1">Install App</button>';
          installDiv.addEventListener('click', () => {
            event.prompt();
            installDiv.innerHTML = ""
          });
        });
        // Befor install prompt end
}
