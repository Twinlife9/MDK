function div() {
  return document.createElement('div');
}

let createLis = (linkNames, ul) => {
  for (let i = 0; i < linkNames.length; i++) {
    let li = document.createElement('li');
    li.className = 'nav-item' + (i == 0 ? 'active' : '');
    let a = document.createElement('a');
    a.className = 'nav-link';
    a.href = '#';
    a.innerHTML = linkNames[i];
    li.appendChild(a);
    ul.appendChild(li);

  }
}

function createCards(el) {
  for (let i = 0; i < 3; i++) {
    let row = div()
    row.className = "row"
    for (let j = 0; j < (i == 2 ? 1 : 3); j++) {
      let col = div()
      col.className = "col-lg-4 col-md-12"

      let carddrop = div()
      carddrop.className = "card drop m-lg-3"
      let cardbody = div()
      cardbody.className = "card-body"
      carddrop.appendChild(cardbody)
      let h5 = document.createElement("h5")
      h5.className = "card-title"
      h5.innerText = 'Название'
      cardbody.appendChild(h5)
      let cardimage = document.createElement("img")
      cardimage.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      cardimage.style = " height: auto; width: 95%; display: block;"
      carddrop.appendChild(cardimage)

      let cardbody2 = div()
      cardbody2.className = "card-body d-flex flex-column"
      let p2 = document.createElement("p")
      p2.className = "card-text"
      p2.innerText = "Some quick example text to build on the card title and make up the bulk of the card 's content."
      cardbody2.appendChild(p2)
      
      let spanprice = document.createElement("span")
      spanprice.className = "ml-1"
      spanprice.innerText = '500p.'
      
      let buy = document.createElement('a')
      buy.href = '#'
      buy.className = 'card-link ml-auto'
      buy.innerText = 'Купить'

      cardbody2.appendChild(spanprice)
      
      cardbody2.appendChild(buy);
      carddrop.appendChild(cardbody2)  
      
      col.appendChild(carddrop)
      row.appendChild(col)
    }
    el.appendChild(row);
  }

}

var body = document.body;
var container = div();
var row = div();

container.className = "container-fluid p-0"
row.className = "row justify-content-center m-0 header"
var logo = div()
var img = document.createElement("img")
img.src = "https://www.ces.tech/CES/media/logos-and-icons/CES-Logo-BW_696x401.png"
img.className = "logo"
var h1 = document.createElement("h1")
h1.innerText = "Logo"
h1.className = "cName"

logo.appendChild(img)
logo.appendChild(h1)
row.appendChild(logo)
container.appendChild(row)

let nav = document.createElement('nav');
nav.className = "navbar navbar-expand-lg navbar-light bg-light"

let collapse = document.createElement('div');
collapse.className = 'collapse navbar-collapse';
collapse.id = 'navbarColor03';

let ul = document.createElement('ul');
ul.className = 'navbar-nav mr-auto mx-auto';

let linkNames = ['Home <span class="sr-only">(current)</span>', 'Features', 'Pricing', 'About'];
createLis(linkNames, ul);


collapse.appendChild(ul);
nav.appendChild(collapse);
container.appendChild(nav);


let sideRow = document.createElement('div');
sideRow.className = 'row no-gutters';
let col1LG = document.createElement('div');
col1LG.className = 'col-lg-1 d-none d-sm-none  d-md-none d-lg-block bg-light';
let sidebar = document.createElement('div');
sidebar.className = 'sidebar';

let sideUl = document.createElement('ul');
sideUl.className = 'nav flex-column m-3';

let linkNames1 = ['Home', 'Features', 'Pricing', 'About'];
createLis(linkNames1, sideUl);

sidebar.appendChild(sideUl);
col1LG.appendChild(sidebar);
sideRow.appendChild(col1LG);
container.appendChild(sideRow);


let maincol = div()
maincol.className = "col-lg-11 col-md-12 bg-light"
let cardcontainer = div()
cardcontainer.className = "container"
let cards = createCards(cardcontainer)


maincol.appendChild(cardcontainer)
sideRow.appendChild(maincol)



body.appendChild(container)
