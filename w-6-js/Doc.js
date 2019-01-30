var e = document.createElement("div")
e.innerHTML = "ee";
e.className="h1";
e.setAttribute("id","div")
var e1 =document.body;
var e1 =document.getElementById("home")
e1.appendChild(e);
e1.insertBefore(e.children[1]);
e1.insertBefore(e,e1.firstChild)
