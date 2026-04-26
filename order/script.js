/* ============================================
   script.js — CapCut Pro Order Page
   ============================================ */

// ── Toast helper ──
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 2500);
}

// ── Plan click: show toast then navigate ──
document.querySelectorAll('.plan:not(.disabled)').forEach(function (plan) {
  plan.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (!href) return;
    e.preventDefault();
    showToast('✅ កំពុងបញ្ជូនទៅ Telegram...');
    setTimeout(function () {
      window.location.href = href;
    }, 900);
  });
});

// ── Mobile touch highlight ──
document.querySelectorAll('.plan:not(.disabled)').forEach(function (plan) {
  plan.addEventListener('touchstart', function () {
    this.style.borderColor = '#e8175d';
  }, { passive: true });

  plan.addEventListener('touchend', function () {
    var self = this;
    setTimeout(function () {
      self.style.borderColor = '';
    }, 300);
  });
});

console.log('CapCut Pro — loaded ✓');
