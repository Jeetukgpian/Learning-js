/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Examples</title>
    <style>
        .button {
            padding: 10px;
            border: 1px solid #ccc;
            background-color: lightblue;
        }
        .item {
            margin: 5px;
            padding: 10px;
            border: 1px solid #ddd;
        }
        #container {
            border: 1px solid #000;
            padding: 10px;
        }
        #header {
            font-size: 24px;
        }
        #footer {
            font-size: 14px;
        }
    </style>
</head>
<body>
    <h1 id="header">Header Text</h1>
    <div id="container">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
    <button id="submit" class="button">Submit</button>
    <div id="footer">Footer Text</div>

    <ul>
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
    </ul>

    <a href="https://example.com">Example Link</a>
</body>
</html>

*/
//------------------DOM Manipulation-------------------
    // Selecting elements by ID
    var header = document.getElementById('header');
    header.style.color = 'blue';

    var footer = document.getElementById('footer');
    footer.textContent = 'Updated Footer Text';

    // Selecting elements by Class
    var items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = 'lightgray';
    }

    var buttons = document.getElementsByClassName('button');
    buttons[0].addEventListener('click', function() {
        alert('Button clicked!');
    });

    // Selecting elements by Attribute
    var link = document.querySelector('[href="https://example.com"]'); //selecting reference link
    link.style.fontWeight = 'bold';

    var inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(function(input) {
        input.value = 'Default Text';
    });

    // Inner HTML vs Text Content
    var container = document.getElementById('container');
    //it include all html content in selection
    container.innerHTML = '<p>This is a paragraph.</p>';

    //it includes all text means hidden text also if there
    var heading = document.getElementById('header');
    heading.textContent = 'New Heading Text';

    //innerText => it includes the text that is visible only on the server

    // NodeList vs HTMLCollection
    var listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.style.color = 'red';
    });

    var tables = document.getElementsByTagName('table');
    if (tables.length > 0) {
        tables[0].style.border = '2px solid black';
    }

    // Converting NodeList and HTMLCollection
    var nodeList = document.querySelectorAll('li');
    var nodeArray = Array.from(nodeList);
    nodeArray.forEach(function(node) {
        node.style.color = 'blue';
    }); //can apply for..each on a NodeList 

    var htmlCollection = document.getElementsByTagName('p');
    //can't use for_each on HTML collection directly you have to convert it into either an array or NodeList
    var pArray = Array.from(htmlCollection);
    pArray.forEach(function(p) {
        p.style.fontSize = '16px';
    });


    //++++++++++++++++Short Revision+++++++++++++++++
/*
    1. Introduction to DOM Manipulation
    JavaScript allows dynamic manipulation of HTML elements on a webpage.

    Essential for interactive web development.
    --------------------------------------------
    2. Capturing and Manipulating Elements
    Practice capturing elements using IDs and classes.
    Use document.getElementById, document.getElementsByClassName, and document.querySelector for selecting elements.

    3. Selecting Elements
    ID Selector: document.getElementById('id')
    Class Selector: document.getElementsByClassName('class')
    Attribute Selector: document.querySelector('[attribute=value]')

    4. Getting and Setting Attributes
    Use getAttribute(attribute) and setAttribute(attribute, value) to manage attributes.
    Example: element.setAttribute('src', 'image.jpg')

    5. Border Radius and Element Values
    Use element.style.borderRadius to set the border radius of elements.
    Understand differences in element values like innerHTML and textContent.

    6. Inner HTML vs. Text Content
    Inner HTML: Includes all HTML tags and content within an element.
    Text Content: Only the visible text within an element, excluding HTML tags.

    7. NodeList vs. HTMLCollection
    NodeList: Static or live collection of nodes, can be iterated using forEach.
    HTMLCollection: Live collection of HTML elements, indexed by position.

    8. Query Selector vs. Query Selector All
    querySelector: Selects the first matching element.
    querySelectorAll: Returns all matching elements as a NodeList.

    9. Converting NodeList and HTMLCollection
    To Array: Use Array.from(nodeList) to convert NodeList or HTMLCollection to an array for additional manipulation.

    10. Manipulating Elements
    Change styles and properties using JavaScript.
    Example: element.style.backgroundColor = 'blue'
    
    11. Updating List Items
    Example of updating list items: Use select and update existing values in a database or list.

*/
    