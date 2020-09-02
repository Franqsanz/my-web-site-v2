window.addEventListener('load', () => {
  console.log(`
    %c¡HOLA! ¿Como estas? 👋🏻`,
    `color: #ffc700;
    background: #2d2d2d;
    font-size: 1.4rem;
  `);

  // Modo Oscuro
  const checkbox = document.querySelector('input[type="checkbox"]')

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  checkbox.addEventListener('change', switchTheme, false);
});