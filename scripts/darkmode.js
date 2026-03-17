(function () {
  const STORAGE_KEY = 'soundsite-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateButton(theme);
  }

  function updateButton(theme) {
    const btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'bi bi-sun-fill fs-5';
      btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      icon.className = 'bi bi-moon-fill fs-5';
      btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButton(getTheme());

    const btn = document.getElementById('darkModeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-bs-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
