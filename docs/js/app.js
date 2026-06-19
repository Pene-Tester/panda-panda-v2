/* Envelope page — tap once to open, tap again to continue */
function initEnvelope() {
  const scene = document.getElementById('envelope-scene');
  const hint = document.getElementById('envelope-hint');
  if (!scene) return;

  scene.addEventListener('click', () => {
    if (scene.classList.contains('opened')) {
      window.location.href = 'flower.html';
      return;
    }

    if (scene.classList.contains('opening')) return;

    scene.classList.add('opening');

    setTimeout(() => {
      scene.classList.remove('opening');
      scene.classList.add('opened');
      if (hint) hint.textContent = 'tap to continue ♡';
    }, 1400);
  });
}

/* Memory page — tap to reveal bouquet */
function initMemory() {
  const scene = document.getElementById('memory-scene');
  const hint = document.getElementById('memory-hint');
  const overlay = document.getElementById('reveal-overlay');
  if (!scene || !overlay) return;

  scene.addEventListener('click', () => {
    if (scene.classList.contains('revealed')) return;

    scene.classList.add('revealed');
    if (hint) hint.classList.add('hidden');

    setTimeout(() => {
      overlay.classList.add('visible');
    }, 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initEnvelope();
  initMemory();
  initWishForm();
});

/* Cake page — submit wish via Formspree */
function initWishForm() {
  const form = document.getElementById('wish-form');
  const success = document.getElementById('wish-success');
  const candles = document.getElementById('cake-candles');
  const submitBtn = document.getElementById('wish-submit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formId = window.BIRTHDAY_FORM?.formspreeId;
    if (!formId || formId === 'YOUR_FORM_ID') {
      alert('Form not set up yet — add your Formspree ID in docs/js/config.js');
      return;
    }

    const wish = form.querySelector('#wish').value.trim();
    if (!wish) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'sending...';

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          wish,
          _subject: "Yabbyy's Birthday Wish",
        }),
      });

      if (!res.ok) throw new Error('submit failed');

      if (candles) candles.classList.add('blown-out');
      form.classList.add('hidden');
      if (success) success.classList.remove('hidden');
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'send my wish ♡';
      alert('Something went wrong — try again in a moment ♡');
    }
  });
}
