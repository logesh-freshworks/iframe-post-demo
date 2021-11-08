(function (d, w, c) {
  let n = d.getElementsByTagName("script")[0];
  let s = d.createElement("script");
  var loaded = false;
  s.async = "async";
  s.src = "http://127.0.0.1:8080/widget-script.js";
  if (c) {
    s.onreadystatechange = s.onload = function () {
      if (!loaded) {
        c();
      }
      loaded = true;
    };
  }
  n.parentNode.insertBefore(s, n);
})(document, window, function () {
  // post from host to widget iframe
  var iframeWin = document.getElementById("widget-iframe").contentWindow;
  iframeWin.postMessage("Hello there...", "*");
});

/**
 * Listents for a parent.postmessage event from child iframe and calls a local scoped function
 */
window.addEventListener("message", function (e) {
  // check if origin is widget iframe
  if (e.origin !== "http://127.0.0.1:8080") return;
  // parse the json strinf
  const data = JSON.parse(e.data);

  // the JSON object will contain the functon name and params to execute
  // check if function and params exist
  if (
    data?.functionName &&
    data?.params &&
    typeof this.window[data.functionName] === "function"
  ) {
    // get the function reference
    let fn = this.window[data?.functionName];

    // Call the function with params
    fn.call(this, data.params);
  }
});

// Function which will be called through iframe post
function sayHello(params) {
  console.log(`Hello ${params?.name}`);
}
