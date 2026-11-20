(function () {
  var d = document, root = d.documentElement;
  var btn = d.getElementById('themeToggle');
  if (btn) {
    btn.setAttribute('aria-pressed', root.dataset.theme === 'dark');
    btn.addEventListener('click', function () {
      var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = t;
      btn.setAttribute('aria-pressed', t === 'dark');
      try { localStorage.setItem('theme', t); } catch (e) {}
    });
  }
  var pb = d.getElementById('printBtn');
  if (pb) { pb.hidden = false; pb.addEventListener('click', function () { window.print(); }); }
  var links = [].slice.call(d.querySelectorAll('.main-nav a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('active', a.hash === '#' + e.target.id); });
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    [].forEach.call(d.querySelectorAll('main section[id]'), function (s) { io.observe(s); });
  }
})();
