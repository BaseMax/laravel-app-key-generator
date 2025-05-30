function generateKey() {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const binaryString = String.fromCharCode.apply(null, bytes);
  const base64String = btoa(binaryString);
  return 'base64:' + base64String;
}

function copyKey() {
  const keyText = document.getElementById('key-box').textContent;
  if (keyText.startsWith('Click')) return alert('Please generate a key first.');
  navigator.clipboard.writeText(keyText).then(() => {
    alert('Key copied to clipboard!');
  }, () => {
    alert('Failed to copy. Please try manually.');
  });
}
