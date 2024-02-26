// GTM
(function (a, s, y, n, c, h, i, d, e) {
  s.className += " " + y;
  h.start = 1 * new Date();
  h.end = i = function () {
    s.className = s.className.replace(RegExp(" ?" + y), "");
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function () {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, "async-hide", "dataLayer", 4000, {
  "GTM-WG5H5KP": true,
});

// GTM
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-WG5H5KP");

// Segment
!(function () {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console && console.error && console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "debug",
        "page",
        "once",
        "off",
        "on",
        "addSourceMiddleware",
        "addIntegrationMiddleware",
        "setAnonymousId",
        "addDestinationMiddleware",
      ];
      analytics.factory = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments);
          t.unshift(e);
          analytics.push(t);
          return analytics;
        };
      };
      for (var e = 0; e < analytics.methods.length; e++) {
        var key = analytics.methods[e];
        analytics[key] = analytics.factory(key);
      }
      analytics.load = function (key, e) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.async = !0;
        t.src = "https://t.surferseo.com/surfer.js/v1/" + key + "/surfer.min.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n);
        analytics._loadOptions = e;
      };
      analytics._writeKey = "R0FvRYOT74qEyIQ29cnOTjjCjAB8C6Tt";
      analytics.SNIPPET_VERSION = "4.13.2";
      analytics._cdn = "https://t.surferseo.com";
      analytics.load("R0FvRYOT74qEyIQ29cnOTjjCjAB8C6Tt");
      analytics.page();
    }
})();

// Pipedrive
(function (ss, ex) {
  window.ldfdr =
    window.ldfdr ||
    function () {
      (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
    };
  (function (d, s) {
    fs = d.getElementsByTagName(s)[0];
    function ce(src) {
      var cs = d.createElement(s);
      cs.src = src;
      cs.async = 1;
      fs.parentNode.insertBefore(cs, fs);
    }
    ce("https://sc.lfeeder.com/lftracker_v1_" + ss + (ex ? "_" + ex : "") + ".js");
  })(document, "script");
})("DzLR5a5vx368BoQ2");

// Leadinfo tracking code
(function (l, e, a, d, i, n, f, o) {
  if (!l[i]) {
    l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
    l.GlobalLeadinfoNamespace.push(i);
    l[i] = function () {
      (l[i].q = l[i].q || []).push(arguments);
    };
    l[i].t = l[i].t || n;
    l[i].q = l[i].q || [];
    o = e.createElement(a);
    f = e.getElementsByTagName(a)[0];
    o.async = 1;
    o.src = d;
    f.parentNode.insertBefore(o, f);
  }
})(window, document, "script", "https://cdn.leadinfo.net/ping.js", "leadinfo", "LI-65D73D62B595A");
