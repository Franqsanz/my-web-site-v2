const article = document.querySelector('article');
const btn = document.querySelector('button');

window.addEventListener('load', () => {
  callApi();

  // event
  btn.addEventListener('click', moreLinks);

  console.log(
    `
    %c¡HOLA! ¿Como estas? 👋🏻, ¿Hay algún error por aquí 👀?`,
    `color: #ffc700;
    background: #2d2d2d;
    font-size: 1.6rem;
  `
  );
});

function callApi() {
  article.innerHTML = '<div class="load"></div>';

  fetch('https://dev.to/api/articles?username=franqsanz', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then(renderHTML)
    .catch(errCallApi);
}

function renderHTML(data) {
  let html = '';

  data.forEach(({ title, url, readable_publish_date }) => {
    html += `
      <a href="${url}" class="aLink">
        <h2>${title}</h2>
      </a>
      <small>${readable_publish_date}</small>
    `;
    article.innerHTML = html;
  });
}

function errCallApi() {
  article.innerHTML =
    '<p>No se logra conectar con la API del sitio DEV.to.</p>';
}

// event
function moreLinks(ev) {
  article.classList.toggle('moreLinks');

  if (btn.innerText === 'Más Artículos')
    return (btn.innerText = 'Menos Artículos');
  btn.innerText = 'Más Artículos';

  if (ev.target.tagName === 'BUTTON') {
    ev.target.classList.toggle('moreLinks');
  }
}
