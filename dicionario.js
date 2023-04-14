const dicionario = {
    "água": "y",
    "fogo": "kûéra",
    "terra": "yby",
    "ar": "yvytu",
    "sol": "kûara",
    // adicione mais palavras aqui
  };

  const form = document.querySelector('form');
  const palavraInput = form.querySelector('#palavra');
  const idiomaSelect = form.querySelector('#idioma');
  const resultadoDiv = document.querySelector('#resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const palavra = palavraInput.value;
    const idioma = idiomaSelect.value;
    const traducao = traduzir(palavra, idioma);
    resultadoDiv.innerHTML = `<p>A tradução de "${palavra}" é "${traducao}".</p>`;
  });

  function traduzir(palavra, idioma) {
    if (idioma === 'tupi') {
      return dicionario[palavra] || 'Palavra não encontrada no dicionário';
    } else if (idioma === 'portugues') {
      for (const [key, value] of Object.entries(dicionario)) {
        if (value === palavra) {
          return key;
        }
      }
      return 'Palavra não encontrada no dicionário';
    }
  }