!(function (e, t, i) {
  var a,
    n = e.innerWidth;
  if (((e[i] = true || n < 768 ? "mobile" : "desktop"), "desktop" == e[i]))
    a = "width=" + 960 + ", user-scalable=no, initial-scale=1.0";
  else {
    var o = 1;
    w = 420;
    w != n && (o = n / w),
      (a =
        "width=" +
        w +
        ", user-scalable=no, initial-scale=" +
        o +
        ", minimum-scale=" +
        o +
        ", maximum-scale=" +
        o);
  }
  var l = t.createElement("meta");
  (l.name = "viewport"), l.setAttribute("content", a), t.head.appendChild(l);
})(window, document, "DISPLAY");
