### Handling Events
jQuery 提供了 `.on()` 方法，用于为选中元素绑定事件，也是 jQuery 1.7+ 最佳实践推荐的方法。

`.on()` 方法提供许多有用的特性:

#### Example
###### 简单事件绑定

```javascript
// When any <p /> tag is clicked, we expect to see '<p /> was clicked' in the console'
$("p").on("click", function() {
    console.log("<p /> was clicked.");
})
```

###### 多事件绑定，单一事件处理函数

```javascript
// When a user focuses on or changes any input element,
// we expect a console message bind to multiple events.
$("div").on("mouseenter mouseleave", function() {
    console.log("mouse hovered over or left a div");
})
```

###### 多事件绑定
`.on()` 可以接收一个 json 对象，可以绑定多个事件和事件处理函数

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

###### 事件对象

```javascript
$("div").on("click", function(event) {
    console.log("event object:");
    console.dir(event);
})
```

###### 传递事件数据

```javascript
$("p").on("click", {
    foo: "bar"
}, function(event) {
    console.log("event data: " + event.data.foo + " (should be 'bar')");
})
```

###### 事件委托

```javascript
$("ul").on("click", "li", function() {
    console.log("Something in a <ul> was clicked, and we detected that it was an <li> element.");
});
```

###### 一次性事件绑定
Sometimes you need to particular handler to run only once, after that, you may want to no handler to run, or you may want a different handler to run. jQuery provides the `.one()` method for this purpose.

```javascript
// Switching handlers using the '.one()' method
$("p").one("click", function() {
    console.log("You just clicked this for the first time!");
    $(this).click(function() {
        console.log("You have clicked this before!");
    })
});
```

The `.one()` method is especilly useful if you need to do some complicated setup the first time an element is clicked, but not subsequent times.

`.one()` accepts the same arguments as `.on()` which means it supports multiple events to one or multiple handlers, passing custom data and event delegation.

###### 解除事件绑定

Although all the fun of jQuery occurs in the `.on()` method, its counterpart is just as important if you want to be a responsible developer. `.off()` cleans up that event binding when you don't need it anymore. Complex user interfaces with lots of event bindings can bog down browser performance, so suing the `.off()` method diligently is a best practice to ensure that you only have the event bindings that you need, when you need them.

```javascript
// Unbinding all click handlers on a selection
$("p").off("click");
```

```javascript
// Unbinding a particular click handler, using a reference to the function
var foo = function() {
    console.log("foo");
};

var bar = function() {
    console.log("bar");
};

$("p").on("click", foo).on("click", bar);

// foo will stay bound to the click event
$("p").off("click", bar)
```


#### Namespcing Events

For complex applications and for plugins you share with others, it can be useful to namespace you events so you don't unintentionally disconnect events that you didn't or couldn't know about. For details, see [Event Namespcing](#)
