
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`You clicked: ${btn.textContent}`);
  });
});
