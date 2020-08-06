let scrollElem = document.querySelector('.scroll');

// var smoothJumpUp = function() {
//         if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
//             window.scrollBy(0,-50);
//             setTimeout(smoothJumpUp, 20);
//         }
//     }

//     window.onscroll = function() {
//       var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//       if (scrolled > 100) {
//       	document.getElementById('upbutton').style.display = 'block';
//       } else {
//       	document.getElementById('upbutton').style.display = 'none';
//       }
//     }

// window.addEventListener('onscroll', () => {
//   if (document.body.scrollTop > document.documentElement.clientHeight) {
//     scrollElem.style.opacity = '1';
//   } else {
//     scrollElem.style.opacity = '0';
//   }
// })


// let timeOut;


// function goUp() {
//   let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//   if (top > 0) {
//     window.scrollBy(0, -100);
//     timeOut = setTimeout(`${goUp()}`, 20)
//   } else {
//     setTimeout(timeOut)
//   }
// }
// scrollElem.addEventListener('click', goUp)
