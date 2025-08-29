//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// focus on first input when page loads
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = '';
      return;
    }

    // move to next input if available
    if (idx < codes.length - 1 && value !== '') {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (code.value === '') {
        // move back if empty
        if (idx > 0) {
          codes[idx - 1].focus();
          codes[idx - 1].value = ''; // clear previous
        }
      } else {
        // delete current
        code.value = '';
      }
    }
  });
});
