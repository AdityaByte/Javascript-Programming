// Here in browser we have the window object which has the document model 
// We call it as the document object model cause in the html document there are many objects as node.
// Here by we have to understand the structure of dom for the particular index.html that i have made.


// Here firstly we are taking about how to get the element by id
// window.document returns a reference to the document contained in the window.
const element = document.getElementById("title")
console.log(element); 
// Here it get the element attributes and other things too via
element.id
element.className // Innerly when we write class to a tag it gets resolved to className.
element.innerHTML // It gives the inner html of that element.
element.innerText // It gives the visible text.
element.textContent // It gives all the text content inside that tag.

// How can we change the style of the element 
// since style element has two things one is key and the value like <span style="display: none;">Hello world</span>
// Here the display is key and none is the value of it.

element.style.display = "none" // Similarly we can change other properties too.

// Now we are taking about how to get the element by querySelector.
// Here in the parameter we can give a tag name classname or even id too.
// When we give the tag name it gives the first element
const newElement = document.querySelector('h2')
// Similarly for className
const newElement2 = document.querySelector(".className")
//Similarly for id
const newElement3 = document.querySelector("#id")

// If we want to select all the element of that particular id,classname or tag we can do this
let ndlist = document.querySelectorAll(h2) // It returns a nodelist which is more likely similar to array but not a pure array 
// Note : Nodelist don't have functions like map, filter and reduce.

// Here ndlist is the Nodelist so we can access elements like index
ndlist[0] // First element
// It has a key of methods like forEach, item and length field too.
