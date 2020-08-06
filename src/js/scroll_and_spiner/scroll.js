let scrollElem = document.querySelector('.scroll');
let currentHeight = document.documentElement.clientHeight;
let height = document.documentElement.clientHeight;
export function heightScroll() {


  // баг, когда загрузка произошла не до конца, не щитает праивильно кнопку


  window.addEventListener('scroll', () => {
    currentHeight = currentHeight + 1;
    console.log(currentHeight, "height2")

    if (currentHeight > 450) {
      scrollElem.classList.remove('scroll_delite')
      console.log(currentHeight, "height2")
      currentHeight = height;
    } else return;
  });

  scrollElem.addEventListener('click', (e) => {
    if (e.target.nodeName === "IMG" || e.target.dataset.moveScroll) {
      console.log(e.target)
      scrollElem.classList.add('scroll_delite');
      currentHeight = height;
      console.log(currentHeight, "height2")
    }

  })


}

window.addEventListener('DOMMouseScroll', function (e) {
  console.log(e, "e")
  console.log(e.originalEvent, "e")
  if (e.originalEvent.detail > 0) {
    //scroll down
    console.log('Down');
  } else {
    //scroll up
    console.log('Up');
  }

  //prevent page fom scrolling
  return false;
});
