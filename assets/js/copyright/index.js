var cpr = document.getElementById("myCopyright");

function redirectCU(e) {
  if (e.ctrlKey && 85 == e.which) return window.location.replace(""), !1;
}

function redirectKK(e) {
  if (3 == e.which) return alert("Thank you for visiting my website :)"), !1;
}

cpr || (window.location.href = "https://cusmedroid.github.io/hotnewstemplate/"), (document.onkeydown = redirectCU), (document.oncontextmenu = redirectKK),

document.addEventListener("keyup", (e) => {
  "PrintScreen" == e.key && (navigator.clipboard.writeText(""), alert("Screenshots disabled!"));
}),

document.addEventListener("keydown", (e) => {
  e.ctrlKey && "p" == e.key && (alert("This section is not allowed to print or export to PDF"), (e.cancelBubble = !0), e.preventDefault(), e.stopImmediatePropagation());
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("cpr").innerHTML = year;
