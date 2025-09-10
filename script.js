function loadJoke() {
  cardEl.classList.add('hidden');
  // var card = document.getElementById("card");
  var btn = document.getElementById("btn");

  try {
    const response = fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = response.json();

    setupEl.textContent   = data;
    punchEl.textContent   = data;
    cardEl.classList.remove('hidden');

  } catch (err) {
    console.error(err);
    '❗️ Something went wrong. Please try again.';
  }
}

btn.addEventListener('submit', loadJoke());
