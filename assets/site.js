// Runs in <head>. The app opens pages with ?embed=1&theme=light|dark so the
// site hides its own header and follows the in-app appearance setting.
(function () {
  var params = new URLSearchParams(location.search);
  var theme = params.get('theme');
  var root = document.documentElement;
  if (theme === 'light' || theme === 'dark') root.setAttribute('data-theme', theme);
  if (params.get('embed') === '1') root.classList.add('embed');
  if (!location.search) return;
  // Keep the same settings when moving between pages of this site.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (/^(https?:|mailto:|#)/.test(href)) return;
      a.setAttribute('href', href + location.search);
    });
  });
})();
