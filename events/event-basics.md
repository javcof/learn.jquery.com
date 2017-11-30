### jQuery Event Basics
#### Setting Up Event Responses on DOM Elements

jQuery makes it straightforward to set up event-driven responses on page elements. There events are often triggered by the end user's interaction with the page, such as when text is entered into a form element or the mouse pointer is moved. In some cases, such as the page load and unload events, the browser itself will trigger the event.

jQuery offers convenience methods for most native browser events. There methods including `.click`, `.focus()`, `.blue()`, `.change()`, etc. are shorthand for jQuery's `.on()` method. The on method is useful for binding the same handler function to multiple events, when you want to provide data to the event handler, when you are working whith custom events, or when you want to pass an object of multiple events and handlers.

```javascript
// Event setup using a convenience method
$("p").click(function() {
    console.log("You clicked a paragraph!");
})
```

```javascript
// Equivalent event setup using the '.on()' method
$("p").on("click", function() {
    console.log("click");
})
```

#### Extending Events to New Page Elements
It is important to note that `.on()` can only create event listeners on elements that exist *at the time you set up the listeners*. Similar elements created after the event the listeners are established will not automatically pick up event behaviors you've set up previously. For example:

```javascript
$(function() {
    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $("button.alert").on("click", function() {
        console.log("A button with the alert class was clicked!");
    });

    // Now create a new button element with the alert class.
    // This button was created after the click listeners were applied above,
    // so it will not have the same click behavior as its peers
    $("<button class='alert'>Alert!</button>").appendTo(document.body);
})
```

Consult the article on event delegation to see how to use `.on()` so that event behaviors will be extended to new elements without having to rebind them.

#### Inside the Event Handler Function
Every event handing function receives an event object, which contains many properties and method. The event object is most commonly used to prevent the default action of the event via the `.preventDefault()` method. However, the event object contains a number of the useful properties and methods, including:

**pageX, pageY**

The mouse position at the time the event occurred, relative to the top left corner of the page display area (not the enntire browser window).
