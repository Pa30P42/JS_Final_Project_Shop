let spinnerElem = document.querySelector('.preloader');
console.log(spinnerElem)
export function startSpinner() {
  window.addEventListener('load', () => {
    spinnerElem.classList.add('hide');
    setTimeout(() => {
      spinnerElem.remove();
    }, 3000)
  })
}
