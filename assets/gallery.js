/* SuperCode IDE — Play-Style Horizontal Media Carousel & Fullscreen Lightbox */
(function () {
  function initGallery() {
    var rail = document.getElementById('scGpRail');
    var prevBtn = document.getElementById('scGpPrev');
    var nextBtn = document.getElementById('scGpNext');
    var modal = document.getElementById('scLightbox');
    var lbImg = document.getElementById('scLbImg');
    var lbTitle = document.getElementById('scLbTitle');
    var lbCounter = document.getElementById('scLbCounter');
    var lbDots = document.getElementById('scLbDots');
    var lbBack = document.getElementById('scLbBack');
    var lbClose = document.getElementById('scLbClose');
    var lbPrev = document.getElementById('scLbPrev');
    var lbNext = document.getElementById('scLbNext');
    if (!rail || !modal) { return; }

    function getItems() { return Array.prototype.slice.call(rail.querySelectorAll('.sc-gp-item')); }
    function updateArrows() {
      if (!prevBtn || !nextBtn) { return; }
      prevBtn.classList.toggle('is-hidden', rail.scrollLeft <= 6);
      nextBtn.classList.toggle('is-hidden', rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8);
    }
    if (prevBtn) { prevBtn.addEventListener('click', function () { rail.scrollBy({ left: -Math.max(320, rail.clientWidth * 0.72), behavior: 'smooth' }); }); }
    if (nextBtn) { nextBtn.addEventListener('click', function () { rail.scrollBy({ left: Math.max(320, rail.clientWidth * 0.72), behavior: 'smooth' }); }); }
    rail.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows, { passive: true });
    updateArrows();

    var isDown = false, startX = 0, startScroll = 0, moved = false;
    rail.addEventListener('mousedown', function (e) {
      if (e.button !== 0) { return; }
      isDown = true; moved = false; startX = e.pageX; startScroll = rail.scrollLeft;
      rail.classList.add('is-dragging');
    });
    window.addEventListener('mousemove', function (e) {
      if (!isDown) { return; }
      var dx = e.pageX - startX;
      if (Math.abs(dx) > 6) { moved = true; e.preventDefault(); rail.scrollLeft = startScroll - dx; }
    });
    window.addEventListener('mouseup', function () {
      if (!isDown) { return; }
      isDown = false; rail.classList.remove('is-dragging');
      setTimeout(function () { moved = false; }, 40);
    });

    var curIdx = 0, pushedState = false;
    function renderSlide(idx) {
      var items = getItems();
      if (!items.length) { return; }
      curIdx = (idx + items.length) % items.length;
      var img = items[curIdx].querySelector('img');
      if (img) {
        lbImg.src = img.getAttribute('src') || img.src;
        lbImg.alt = img.alt || 'SuperCode IDE';
        if (lbTitle) { lbTitle.textContent = img.getAttribute('data-cap') || img.alt || ''; }
      }
      if (lbCounter) { lbCounter.textContent = (curIdx + 1) + ' / ' + items.length; }
      if (lbDots) {
        var dots = lbDots.querySelectorAll('.sc-lb-dot');
        for (var d = 0; d < dots.length; d++) { dots[d].classList.toggle('is-active', d === curIdx); }
      }
    }
    function buildDots() {
      if (!lbDots) { return; }
      var items = getItems();
      lbDots.innerHTML = '';
      for (var i = 0; i < items.length; i++) {
        (function (k) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'sc-lb-dot' + (k === 0 ? ' sc-lb-dot--wide' : '');
          b.setAttribute('aria-label', String(k + 1));
          b.addEventListener('click', function () { renderSlide(k); });
          lbDots.appendChild(b);
        })(i);
      }
    }
    function openLb(idx) {
      buildDots();
      renderSlide(idx);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      try {
        if (window.history && window.history.pushState) {
          window.history.pushState({ scLightbox: true }, '', window.location.href);
          pushedState = true;
        }
      } catch (e) { pushedState = false; }
    }
    function closeLb(fromPop) {
      if (!modal.classList.contains('is-open')) { return; }
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (!fromPop && pushedState) {
        pushedState = false;
        try { window.history.back(); } catch (e) {}
      } else {
        pushedState = false;
      }
    }

    rail.addEventListener('click', function (e) {
      if (moved) { return; }
      var btn = e.target.closest ? e.target.closest('.sc-gp-item') : null;
      if (!btn) { return; }
      var items = getItems();
      var idx = items.indexOf(btn);
      if (idx >= 0) { openLb(idx); }
    });
    if (lbBack) { lbBack.addEventListener('click', function () { closeLb(false); }); }
    if (lbClose) { lbClose.addEventListener('click', function () { closeLb(false); }); }
    if (lbPrev) { lbPrev.addEventListener('click', function (e) { e.stopPropagation(); renderSlide(curIdx - 1); }); }
    if (lbNext) { lbNext.addEventListener('click', function (e) { e.stopPropagation(); renderSlide(curIdx + 1); }); }
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.classList.contains('sc-lb-stage')) { closeLb(false); }
    });
    window.addEventListener('popstate', function () { if (modal.classList.contains('is-open')) { closeLb(true); } });
    window.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('is-open')) { return; }
      if (e.key === 'Escape') { closeLb(false); }
      else if (e.key === 'ArrowLeft') { renderSlide(curIdx - 1); }
      else if (e.key === 'ArrowRight') { renderSlide(curIdx + 1); }
    });

    var tx0 = 0, ty0 = 0;
    modal.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length === 1) { tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY; }
    }, { passive: true });
    modal.addEventListener('touchend', function (e) {
      if (!e.changedTouches || !e.changedTouches.length) { return; }
      var dx = e.changedTouches[0].clientX - tx0;
      var dy = e.changedTouches[0].clientY - ty0;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
        renderSlide(dx < 0 ? curIdx + 1 : curIdx - 1);
      } else if (dy > 76 && Math.abs(dy) > Math.abs(dx)) {
        closeLb(false);
      }
    }, { passive: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
