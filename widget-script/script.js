let h1 = document.createElement("h1");
h1.textContent = "Hello";
document.body.appendChild(h1);

parent.postMessage(
  JSON.stringify({ functionName: "sayHello", params: { name: "Bob" } }),
  "*"
);

window.addEventListener(
  "message",
  (event) => {
    console.log("Origin: " + event.origin);
    if (event.origin !== "http://127.0.0.1:50909") return;
  },
  false
);
