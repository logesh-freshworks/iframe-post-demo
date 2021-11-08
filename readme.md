# Iframe post demo
### Solution to call js functions in host 

#### Send iframe post message to parent from widget iframe
```js
parent.postMessage("myevent", "*");
```

#### On host end, list for the ifram epost message
```js
window.addEventListener("message", function (e) {
  if (e.origin !== "http://127.0.0.1:8080") return;
  console.log(e.origin);
});
```



