fetch('quotes.json')
  .then(response => response.json())
  .then(quotes => {
    const quoteIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 6)) % quotes.length;
    document.getElementById('quote').textContent = quotes[quoteIndex];
  });
