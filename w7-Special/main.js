let boxes=[]
let BakePos = () => {
  document.querySelectorAll('.box').forEach((el) => {
    // el = el.getBoundingClientRect();
    //console.log(el, el.offsetLeft, el.offsetTop);
    el.style.top = el.offsetTop + 'px';
    el.style.left = el.offsetLeft + 'px';
    setTimeout(() => {
      el.style.position = 'absolute';
    }, 1);
  })
};
BakePos();

let rebuild = () => {
  document.querySelectorAll('.box').forEach((el) => {
    el.style = '';
  });
}

let home = {
  x: 8,
  y: 8
};
let activeEl = '';
let followMouse = (e, elem) => {

  let el = activeEl
  el.style.position = 'absolute';
  el.style.transition = '0s';
  el.style.top = e.pageY + 'px';
  el.style.left = e.pageX + 'px';

};

let return2Home = (el) => {
  home = el.getAttribute('home').split(',');
  el.style.transition = '3s';
  el.style.top = home[1] + 'px';
  el.style.left = home[0] + 'px';
  return;
};

let saveHome = (el) => {
  let elemRect = el.getBoundingClientRect(),
    y = elemRect.top;
  x = elemRect.left;

  console.log({
    x,
    y
  });
  el.setAttribute('home', x + ',' + y);

};

let deletePill = (el) => {
  let alpha = 1;
  let changeAlpha = () => {
    if (alpha > 0) {
      el.style.opacity = alpha;
      alpha -= 0.05;
      setTimeout(changeAlpha, 16);
    } else {
      el.remove();
      rebuild();
      BakePos();
    }
  }
  setTimeout(changeAlpha, 16);

}

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', followMouse);
  let el = activeEl;
  if (el.getBoundingClientRect().left > 1280) {
    deletePill(el);
  } else {
    return2Home(el);
  }
});

let DoDrag = (el) => {
  activeEl = el;
  saveHome(activeEl);
  document.addEventListener('mousemove', followMouse);

};
// document.addEventListener('mouseup', ()=>{
// let el = document.querySelector('.mv');
// document.removeEventListener('mousemove', followMouse, true);
// })