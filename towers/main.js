const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
const step = 50;
const startWidth = 300;
const colors = ["red", "green", "blue","cyan","black"];
let moving = "";

let offX, offY;
for (let i = 0; i < 5; i++) {
  let disc = document.createElement("div");
  disc.className = "disc";
  disc.style.backgroundColor = colors[i];
  disc.style.width = startWidth - step * i + "px";
  disc.id = "d" + i;
  disc.onmousedown = function(e) {
    //console.log(e);
    //console.log(this);
    offX = e.offsetX;
    offY = e.offsetY;
    //console.log(offX);

    moving = this;
    document.addEventListener("mousemove", followMouse);
  };
  tower1.insertBefore(disc, tower1.firstChild);
}
let BakePos = () => {
  document.querySelectorAll(".disc").forEach(el => {
    // el = el.getBoundingClientRect();
    //console.log(el, el.offsetLeft, el.offsetTop);

    tempC = el.style.backgroundColor;
    tempW = el.style.width;
    el.style = "";
    el.style.backgroundColor = tempC;
    el.style.width = tempW;
    el.style.top = el.offsetTop + "px";
    el.style.left = el.offsetLeft + "px";

    setTimeout(() => {
      el.style.position = "absolute";
    }, 1);
  });
};
BakePos();
let offsetX;
let offsetY;
function followMouse(e) {
  if (!moving) {
    return;
  }
  if (moving.parentNode.firstChild != moving) {
    moving = 0;
    return;
  }
  el = moving;
  el.style.position = "absolute";
  el.style.top = e.pageY - offY + "px";
  el.style.left = e.pageX - offX + "px";
  //console.log(e);
}

function checkbounds(el, e) {
  bounds = el.getBoundingClientRect();
  maxX = bounds.left + bounds.width;
  minX = bounds.left;
  maxY = bounds.top + bounds.height;
  minY = bounds.top;
  return e.x < maxX && e.x > minX && e.y > minY && e.y < maxY;
}

function changeParent(child, new_parent) {
  child.parentNode.removeChild(child);
  new_parent.insertBefore(child, new_parent.firstChild);
}

function checkSize(pNode, toCheck) {
  let width_str = "999999px";
  try {
    width_str = pNode.firstChild.style.width;
  } catch (error) {}
  iPWidth = parseInt(width_str.split("px")[0]);
  _width_str = toCheck.style.width;
  iCWidth = parseInt(_width_str.split("px")[0]);

  if (iPWidth > iCWidth) {
    return true;
  }
  return false;
}

document.addEventListener("mouseup", e => {
  document.removeEventListener("mousemove", followMouse);
  if (!moving) {
    return;
  }
  if (checkbounds(tower1, e) && checkSize(tower1, moving)) {
    console.log("on tower1");
    changeParent(moving, tower1);
  }
  if (checkbounds(tower2, e) && checkSize(tower2, moving)) {
    console.log("on tower2");
    changeParent(moving, tower2);
  }
  if (checkbounds(tower3, e) && checkSize(tower3, moving)) {
    console.log("on tower3");
    changeParent(moving, tower3);
  }

  BakePos();
  moving = 0;
});
