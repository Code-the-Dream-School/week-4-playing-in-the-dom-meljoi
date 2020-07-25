//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
let newDiv = document.createElement('div');
document.getElementById('a-1').appendChild(newDiv);
//console.log(document.getElementById('a-1').children)
newDiv.className += " square";
// console.log(document.getElementById("a-1").className)
// console.log(newDiv.className)

newDiv.addEventListener("click", () => {
  console.log("running")
  if (newDiv.textContent == "o") {
    newDiv.textContent = "x";
  } else {
    newDiv.textContent = "o";
  }
});



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
//const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here

let id = document.getElementById('a-2');

const colors = ['red', 'white', 'black', 'green', 'orange'];

let sel = document.createElement('select')
id.append(sel);


let colorList = " ";
let list = function () { //adds the colors array into the select element
  for (i = 0; i < colors.length; i++) {
    colorList += `<option> ${colors[i]} </option>`;
  }
  return colorList;
}
sel.innerHTML = list();

let btn = document.createElement('button');
let button = document.getElementById('a-2').appendChild(btn);
btn.textContent = "Remove Item";

btn.addEventListener('click', () => { //the event when clicked will remove the item selected

  sel.remove(sel.selectedIndex);

})





//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () => {
  let radius = document.getElementById('radius').value;
  radius = parseInt(Math.abs(radius));
  let area = document.getElementById('area');
  let volume = document.getElementById("volume");

    document.addEventListener('submit', (e) => {

      e.preventDefault();
      volume.value = (4 / 3) * Math.PI * Math.pow(radius, 3); //calculates the volume
      area.value = Math.PI * (radius * radius); //calculates the area
  })

 }

window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.


//resolve // QUESTION 4 here
let btn1 = document.createElement('button');
document.getElementById('a-4').appendChild(btn1);
btn1.textContent = 'Hide Question 1';

let btn2 = document.createElement('button');
document.getElementById('a-4').appendChild(btn2);
btn2.textContent = 'Hide Question 2';

let btn3 = document.createElement('button');
document.getElementById('a-4').appendChild(btn3);
btn3.textContent = 'Hide Question 3';


btn1.addEventListener('click', (e) => { //when event is clicked for each it will hide or show the answer

  let div = document.getElementById("a-1");

  if (e.target.textContent == 'Hide Question 1') {
    e.target.textContent = "Show Question 1";
    div.style.display = 'none'
  }
  else if (e.target.textContent == "Show Question 1") {
    div.style.display = '';
    e.target.textContent = "Hide Question 1";
  }
});

btn2.addEventListener('click', (e) => {

  let div = document.getElementById("a-2");

  if (e.target.textContent == 'Hide Question 2') {
    e.target.textContent = "Show Question 2";
    div.style.display = 'none'
  }
  else if (e.target.textContent == "Show Question 2") {
    div.style.display = '';
    e.target.textContent = "Hide Question 2";
  }
});

btn3.addEventListener('click', (e) => {

  let div = document.getElementById("a-3");

  if (e.target.textContent == 'Hide Question 3') {
    e.target.textContent = "Show Question 3";
    div.style.display = 'none'
  }
  else if (e.target.textContent == "Show Question 3") {
    div.style.display = '';
    e.target.textContent = "Hide Question 3";
  }
});
