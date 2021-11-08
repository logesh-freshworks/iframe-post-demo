(function (d, w, c) {
  let body = d.getElementsByTagName("body");
  let iframe = d.createElement("iframe");
  iframe.id = "widget-iframe";
  iframe.src = "http://127.0.0.1:8080";
  iframe.height = 300;
  iframe.width = 400;
  iframe.name = "frame";
  iframe.allow;
  iframe.onload = handleIframeOnLoad;
  if (body.length) {
    body[0].appendChild(iframe);
  }
  function handleIframeOnLoad() {}
})(document, window, function () {});
