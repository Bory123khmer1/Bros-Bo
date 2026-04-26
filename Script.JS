/* ==========================================
   Digital Card - ប្រពីណីខ្មែរ
   JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Floating chat button ── */
  const chatBtn = document.querySelector('.floating-chat');
  if (chatBtn) {
    chatBtn.addEventListener('click', function (e) {
      // Pulse animation on click
      this.style.transform = 'scale(0.9)';
      setTimeout(() => { this.style.transform = ''; }, 200);
      // Link already set via href — no extra window.open needed
    });
  }

  /* ── Social link hover border color ── */
  document.querySelectorAll('.link').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      this.style.borderColor = 'rgba(201,147,58,0.45)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.borderColor = 'rgba(201,147,58,0.14)';
    });
  });

  /* ── Avatar primary button glow ── */
  const primaryBtn = document.querySelector('.av-btn-primary');
  if (primaryBtn) {
    primaryBtn.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 10px 28px rgba(139,26,26,0.7)';
    });
    primaryBtn.addEventListener('mouseleave', function () {
      this.style.boxShadow = '0 6px 20px rgba(139,26,26,0.5)';
    });
  }

  /* ── Subtle entrance stagger for link cards ── */
  const links = document.querySelectorAll('.link');
  links.forEach(function (link, i) {
    link.style.opacity = '0';
    link.style.transform = 'translateY(14px)';
    link.style.transition = 'opacity .4s ease, transform .4s ease';
    setTimeout(function () {
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 120 + i * 60);
  });

  /* ── Gold shimmer pulse on avatar ring ── */
  const ring = document.querySelector('.avatar-ring');
  if (ring) {
    ring.addEventListener('mouseenter', function () {
      this.style.animationPlayState = 'paused';
      this.style.boxShadow =
        '0 0 0 2px #5c0f0f, 0 0 55px rgba(201,147,58,0.85), 0 0 100px rgba(201,147,58,0.3)';
    });
    ring.addEventListener('mouseleave', function () {
      this.style.animationPlayState = '';
      this.style.boxShadow = '';
    });
  }

  /* ── Ripple effect on link click ── */
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(201,147,58,0.25);
        transform:scale(0);
        animation:rippleAnim .5s ease-out forwards;
        width:80px; height:80px;
        left:${e.offsetX - 40}px;
        top:${e.offsetY - 40}px;
        pointer-events:none;
        z-index:10;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  /* Inject ripple keyframes once */
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: scale(4); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

});