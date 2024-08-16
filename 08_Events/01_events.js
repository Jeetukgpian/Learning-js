// JavaScript Events ++++++++++

//1. Event Binding:
// addEventListener() Method: Attaches an event handler to a specified element.

//onClick event in html => directly embed
/*
document.getElementById('owl').onClick(function(e){ 
    console.log("owl clicked");
}, false);
*/

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
}, false);

/*
Syntax:
element.addEventListener(event, function, useCapture);
Parameters:
event: The type of event (e.g., 'click', 'mouseover').
function: The function to execute when the event occurs.
useCapture: (Optional) Boolean, default is false. If true, the event is captured during the capturing phase (event flows from the document root to the target element).
*/

/*
2. Event Object Properties:
e.target and e.currentTarget:

e.target: Refers to the actual element that triggered the event.
e.currentTarget: Refers to the element to which the event handler is attached.
*/

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName); // Outputs 'IMG' when an image is clicked
    console.log(e.target.id);      // Outputs the id of the clicked image
});
/*
e.preventDefault():

Prevents the default action associated with the event (e.g., preventing a link from following the URL).
*/

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault(); // Prevents the link from redirecting to Google
});

/*
e.stopPropagation():

Stops the event from propagating (bubbling) up the DOM tree.
*/

document.getElementById('owl').addEventListener('click', function(e){
    e.stopPropagation(); // Prevents further propagation of the event in the bubbling phase
});

/*
3. Event Phases:
Event Flow:
Capturing Phase: The event starts from the root element and flows down to the target element.
Bubbling Phase: The event starts from the target element and bubbles up to the root.
By default, events bubble up the DOM tree unless explicitly stopped.
4. Event Types:
Common Event Types:
click, mouseover, mouseout, keydown, keyup, load, resize, etc.
5. Dynamic Element Handling:
Delegated Events: Attaching events to a parent element rather than directly to child elements

*/

document.querySelector('#images').addEventListener('click', function(e){
    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.remove(); // Removes the clicked image's parent <li> element
    }
});
/*
6. Removing Elements Dynamically:
remove() Method:
Directly removes the selected element from the DOM.
*/

let removeIt = e.target.parentNode;
removeIt.remove(); // Removes the parent <li> element of the clicked image

/*
6. Removing Elements Dynamically:
remove() Method:
Directly removes the selected element from the DOM.
*/

//let removeIt = e.target.parentNode;
//removeIt.remove(); // Removes the parent <li> element of the clicked image

/*
7. Event Propagation:
Propagation Control: Controlling the flow of events using stopPropagation() to prevent the event from moving up the DOM tree.
*/


/*
1. Event Bubbling:
Definition:

Event bubbling is the process where an event starts from the target element and then bubbles up to its parent elements in the DOM tree.

*/

/*
<div id="parent" style="padding: 20px; background-color: lightgray;">
    Parent Div
    <button id="child">Click Me!</button>
</div>

<script>
    // Parent div event listener
    document.getElementById('parent').addEventListener('click', function() {
        console.log('Parent div clicked');
    });

    // Child button event listener
    document.getElementById('child').addEventListener('click', function(e) {
        console.log('Child button clicked');
        // e.stopPropagation(); // Uncomment this line to stop the event from bubbling up to the parent
    });
</script>
*/

/*
When you click the button with id="child", the event first triggers the button's event listener, logging "Child button clicked".
Then, the event bubbles up to the parent div, triggering its event listener and logging "Parent div clicked".
Stop Bubbling: If you want to prevent the event from bubbling up to the parent, you can use e.stopPropagation() in the child event listener.
*/

/*
<button id="myButton">Click Me!</button>

<script>
    // Function that changes the text
    function changeText() {
        document.getElementById('myButton').innerText = 'Button Clicked';
        return Promise.resolve();
    }

    // Function that changes the background color
    function changeColor() {
        document.getElementById('myButton').style.backgroundColor = 'lightblue';
    }

    // Chained event listener
    document.getElementById('myButton').addEventListener('click', function() {
        changeText()
            .then(changeColor)
            .catch((error) => console.log('Error:', error));
    });
</script>
*/


/*
Explanation:
The changeText function updates the button's text and returns a resolved promise.
The changeColor function changes the button's background color.
These functions are chained together using .then(). When the button is clicked, changeText is called first. Once it’s done, changeColor is called next.
*/

/*
Summary:
Event Bubbling: An event triggered on a child element can bubble up and trigger the same event on its parent elements unless propagation is stopped.
Chaining in Event Listeners: You can chain functions in an event listener by using promises, allowing for sequential execution of multiple operations.
*/

