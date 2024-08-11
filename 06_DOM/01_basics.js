/*
    Document Object Model (DOM) 
    The Document Object Model (DOM) is a programming    interface for HTML and XML documents. It represents the    structure of a document as a tree of objects, where    each object corresponds to a part of the document.
*/

//DOM Tree for html code

/*
<!DOCTYPE html>
<html>
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1 id="main-header">Welcome to the DOM</h1>
    <p class="intro">This is a paragraph.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
*/
/*
Window
|
|
|───Document
    │
    └───<html>
        │
        ├───<head>
        │    └───<title> "Document Title" (Text Node)
        │
        └───<body>
            │
            ├───<h1 id="main-header"> "Welcome to the DOM" (Text Node)
            │
            ├───<p class="intro"> "This is a paragraph." (Text Node)
            │
            └───<ul>
                │
                ├───<li> "Item 1" (Text Node)
                │
                ├───<li> "Item 2" (Text Node)
                │
                └───<li> "Item 3" (Text Node)
*/

//in console how to access dom
//method1: console.log(window.document)
//method2: console.dir(document)

//Accessing DOM Elements
// Access the h1 element with id="header" -Using getElementById()
const header = document.getElementById("header");
console.log(header.textContent); // Output: Hello World

// Access the paragraph element with class="description"- getElementsByClassName
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs[0].textContent); // Output: This is a paragraph.

// Access all <li> elements inside the <ul>-getElementsByTagName
const listItems = document.getElementsByTagName("li");
console.log(listItems.length); // Output: 3

// Access the first <p> element using querySelector
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent); // Output: This is a paragraph.

// Access all <li> elements using querySelectorAll
const allListItems = document.querySelectorAll("li");
allListItems.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.textContent}`);
});
// Output:
// Item 1: Item 1
// Item 2: Item 2
// Item 3: Item 3

// Modifying DOM Elements
//1.Changing Text Content
// Change the text content of the h1 element
header.textContent = "Welcome to the DOM!";
console.log(header.textContent); // Output: Welcome to the DOM!
//change inner Html
header.innerHTML="Welcome to the world"

//2.Changing Attributes

// Change the class attribute of the <p> element
firstParagraph.setAttribute("class", "new-description");
console.log(firstParagraph.getAttribute("class")); // Output: new-description


//Adding New Elements

// Create a new <li> element and add it to the <ul>
const newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.querySelector("ul").appendChild(newItem);

console.log(document.querySelectorAll("li").length); // Output: 4

//Removing Elements

// Remove the first <li> element
const firstItem = document.querySelector("li");
firstItem.remove();

console.log(document.querySelectorAll("li").length); // Output: 3









