### Handling Events
jQuery 提供了 `.on()` 方法，用于为选中元素绑定事件，也是 jQuery 1.7+ 最佳实践推荐的方法。

`.on()` 方法提供许多有用的特性:

#### Example
##### 简单事件绑定

```javascript
// When any <p /> tag is clicked, we expect to see '<p /> was clicked' in the console'
$("p").on("click", function() {
    console.log("<p /> was clicked.");
})
```

##### 多事件绑定，单一事件处理函数

```javascript
// When a user focuses on or changes any input element,
// we expect a console message bind to multiple events.
$("div").on("mouseenter mouseleave", function() {
    console.log("mouse hovered over or left a div");
})
```

##### 多事件绑定
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

##### 事件对象

```javascript
$("div").on("click", function(event) {
    console.log("event object:");
    console.dir(event);
})
```

##### 传递事件数据

```javascript
$("p").on("click", {
    foo: "bar"
}, function(event) {
    console.log("event data: " + event.data.foo + " (should be 'bar')");
})
```

##### 事件委托

```javascript
$("ul").on("click", "li", function() {
    console.log("Something in a <ul> was clicked, and we detected that it was an <li> element.");
});
```

##### 一次性事件绑定
`.one()` 方法提供了一次性事件绑定的途径

```javascript
// 使用 '.one()' 转换事件处理函数
$("p").one("click", function() {
    console.log("You just clicked this for the first time!");
    $(this).click(function() {
        console.log("You have clicked this before!");
    })
});
```

`.one()` 方法的提供了和 `.on()` 方法一样参数和调用方式。

##### 解除事件绑定

`.off()` 方法可以清理绑定的事件，复杂的用户接口、过多的事件绑定都可能造成浏览器的性能问题。清理不必要的事件，也是很有必要的。

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

##### 命名空间

事件命名空间，对于编写复杂应用或者 jQuery 插件，是很有必要的。
