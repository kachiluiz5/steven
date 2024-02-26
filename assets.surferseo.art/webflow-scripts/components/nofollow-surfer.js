// Nofollow to all app.surfeo.com links

$('a[href*="app.surferseo.com"]').each(function () {
  // check link
  $(this).attr("rel", "nofollow"); // add attribute rel=nofollow
});
