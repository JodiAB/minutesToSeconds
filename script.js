document.getElementById('convertButton').addEventListener('click', function() {
    const minutes = parseFloat(document.getElementById('minutes').value);

    if (isNaN(minutes) || document.getElementById('minutes').value === '') {
      alert('Please enter a valid number for minutes.');
      return;
    }

    const seconds = (Math.round(minutes * 60 * 100) / 100).toFixed(2);

    document.getElementById('output').innerHTML = `${minutes} minutes is equal to ${seconds} seconds.`;
  });