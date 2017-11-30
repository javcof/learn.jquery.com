### Handling Events
jQuery provides a method `.on()` to respond to any event on the seleted elements. This is called an *event binding*.
Although `.on()` isn't the only method provided for binding, it is a best practice to use this for jQuery 1.7+. To learn more, [read more about the evolution of event binding in jQuery](#)

The `.on()` method provides several useful features:

* [Bind any event tiggered on the selected elements to an event handler](#)
* [Bind multiple events to one event handler](#)
* [Bind multiple events and multiple handlers to the selected elements](#)
* [Use details about the event in the event handlers](#)
* [Pass data to the event handler for custom Events](#)
* [Bind events to elements that will be rendered in the future](#)

#### 简单事件绑定

```javascript
// When any <p /> tag is clicked, we expect to see '<p /> was clicked' in the console'
$("p").on("click", function() {
    console.log("<p /> was clicked.");
})
```

#### 多事件，单一事件处理函数

```javascript
// When a user focuses on or changes any input element,
// we expect a console message bind to multiple events.
$("div").on("mouseenter mouseleave", function() {
    console.log("mouse hovered over or left a div");
})
```

#### 多事件，多事件处理函数
`.on()` accepts an object containing multiple events and handlers.

```javascript
$("div").on({
    mouseenter: function() {
        console.log("hovered over a div");
    },
    mouseleave: function() {
        console.log("mouse left a div");
    },
    click: function() {
        console.log("clicked on a div");
    }
});
```

#### 事件对象

```javascript
$("div").on("click", function(event) {
    console.log("event object:");
    console.dir(event);
})
```

#### 为事件处理函数传递数据
You can pass your own data to the event object.

```javascript
$("p").on("click", {
    foo: "bar"
}, function(event) {
    console.log("event data: " + event.data.foo + " (should be 'bar')");
})
```

#### 为当前不存在的元素绑定事件处理函数
This is called *event delegation*. Here's an example just for completeness, but see the page on [Event Delegation](#) for a full explanation.

```javascript
$("ul").on("click", "li", function() {
    console.log("Something in a <ul> was clicked, and we detected that it was an <li> element.");
});
```
