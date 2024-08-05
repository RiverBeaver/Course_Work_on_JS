export function popUp(text) {
  const popup = document.createElement('div');
  popup.classList.add('popUp');
  popup.innerHTML = text;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3000);
  return popup;
}
