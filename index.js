const article = document.querySelector("article");

window.addEventListener('load', () => {
  console.log(`
    %c¡HOLA! ¿Como estas? 👋🏻, ¿Hay algún error por aquí 👀?`,
    `color: #ffc700;
    background: #2d2d2d;
    font-size: 1.6rem;
  `);

  article.innerHTML = '<div class="load"></div>';

  fetch("https://dev.to/api/articles?username=franqsanz")
    .then((res) => res.json())
    .then((data) => {
          
      let html = "";
      
      data.forEach(({ title, url, readable_publish_date }) => {
        html += `
          <a href="${url}" class="aLink">
            <h2>${title}</h2>
          </a>
          <small>${readable_publish_date}</small>
        `;
        article.innerHTML = html;
      });
    })
    .catch(() => {
      article.innerHTML = '<p>No se logra conectar con la API del sitio DEV.to.</p>';
    });
});