var contador=0;
const colors = ["red-circle","yellow-circle","blue-circle"];
const divButtons = document.createElement("div");
divButtons.id = `divButtons`
document.body.appendChild(divButtons);
const divCircles = document.createElement("div");
divCircles.id = `divCircles`
document.body.appendChild(divCircles);

const ediv1 = document.createElement('button');
ediv1.innerHTML = `Add Random Circle!`;
ediv1.addEventListener("click", addRandomCircle);
document.getElementById("divButtons").appendChild(ediv1);
const ediv2 = document.createElement('button');
ediv2.innerHTML = `Add Red Circle!`;
ediv2.addEventListener("click", addRedCircle);
document.getElementById("divButtons").appendChild(ediv2);
const ediv3 = document.createElement('button');
ediv3.innerHTML = `Add Yellow Circle!`;
ediv3.addEventListener("click", addYellowCircle);
document.getElementById("divButtons").appendChild(ediv3);
const ediv4 = document.createElement('button');
ediv4.innerHTML = `Add Blue Circle!`;
ediv4.addEventListener("click", addBlueCircle);
document.getElementById("divButtons").appendChild(ediv4);

// make all circles visible again.
window.onkeydown = function (event) {
    if (event.key === 'Escape') {
        for(const element of document.querySelectorAll(".circle"))
        element.style.display = 'flex';
    }
};

function addRandomCircle(){
    const random = Math.floor(Math.random() * colors.length);
    var e = document.createElement(`div`);
    e.classList.add("circle");
    e.classList.add(colors[random]);
    e.innerText = "(random)\n" + colors[random]+ "\nid: " +contador.toString();
    e.id = colors[random] + contador.toString();
    contador = contador+1;
    e.onclick = function () {
        e.style.display = 'none';
    };
    document.getElementById("divCircles").appendChild(e);

}

function addRedCircle(){
    var e = document.createElement(`div`);
    e.classList.add("circle");
    e.classList.add("red-circle");
    e.innerText = "red-circle" + "\nid: " +contador.toString();
    e.id = "red-circle" + contador.toString();
    contador = contador+1;
    e.onclick = function () {
        e.style.display = 'none';
    };
    document.getElementById("divCircles").appendChild(e);

}
function addYellowCircle(){
    var e = document.createElement(`div`);
    e.classList.add("circle");
    e.classList.add("yellow-circle");
    e.innerText = "yellow-circle" + "\nid: " +contador.toString();
    e.id = "yellow-circle" + contador.toString();
    contador = contador+1;
    e.onclick = function () {
        e.style.display = 'none';
    };
    document.getElementById("divCircles").appendChild(e);

}
function addBlueCircle(){
    var e = document.createElement(`div`);
    e.classList.add("circle");
    e.classList.add("blue-circle");
    e.innerText = "blue-circle" + "\nid: " +contador.toString();
    e.id = "blue-circle" + contador.toString();
    contador = contador+1;
    e.onclick = function () {
        e.style.display = 'none';
    };
    document.getElementById("divCircles").appendChild(e);

}
