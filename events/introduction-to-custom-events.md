### Custom Events
我们已经很熟悉了一些基于浏览器的事件，比如：click, mouseover, focus, blur, submit 等等。通过这些事件用户可以很方便和浏览器进行交互，但是今天讲的用户自定义事件，为我们开启了一种事件驱动编程的新模式。

* Behaviors of the target element can easily be triggerd by different elements using the same code.
* Behaviors can be triggered across multiple, similar, target elements at once.
* Behaviors are more clearly associated with the target element in code, making code easier to read and maintain.

```html
<div class="room" id="kitchen">
    <div class="lightbulb on"></div>
    <div class="switch"></div>
    <div class="switch"></div>
    <div class="clapper"></div>
</div>
```

您原来的代码可能是这样组织的：

```javascript
$(".switch, .clapper").click(function() {
    var light = $(this).closest(".room").find("lightbulb");
    if (light.is(".on")) {
        light.removeClass("on").addClass("off");
    } else {
        light.removeClass("off").addClass("on");
    }
});
```

使用用户自定义事件，来优化您的代码：

```javascript
$(".lightbulb").on("light:toggle", function(event) {
    var light = $(this);
    if (light.is(".on")) {
        light.removeClass("on").addClass("off");
    } else {
        light.removeClass("off").addClass("on");
    }
});

$(".switch, .clapper").click(function() {
    var room = $(this).closest(".room");
    room.find(".lightbulb").trigger("light:toggle");
});
```

再来一个更有挑战的例子：

```html
<div class="room" id="kitchen">
    <div class="lightbulb on"></div>
    <div class="switch"></div>
    <div class="switch"></div>
    <div class="clapper"></div>
</div>
<div class="room" id="bedroom">
    <div class="lightbulb on"></div>
    <div class="switch"></div>
    <div class="switch"></div>
    <div class="clapper"></div>
</div>
<div id="master_switch"></div>
```

我们为 lightbulb 添加了两个用户自定义事件：`light:on` 和 `light:off`，可以在 `light:toggle` 事件里面使用，也可以由 master switch 单独使用。

```javascript
$(".lightbulb").on({
    "light:toggle": function(event) {
        var light = $(this);
        if (light.is(".on")) {
            light.trigger("light:off");
        } else {
            light.trigger("light:on");
        }
    },
    "light:on": function(event) {
        $(this).removeClass("off").addClass("on");
    },
    "light:off": function(event) {
        $(this).removeClass("on").addClass("off");
    }
});

$(".switch, .clapper").click(function() {
    var room = $(this).closest(".room");
    room.find(".lightbulb").trigger("light:toggle");
});

$("master_switch").click(function() {
    var lightbulbs = $(".lightbulb");

    // Check if any lightbulbs are on
    if (lightbulbs.is(".on")) {
        lightbulbs.trigger("light:off");
    } else {
        lightbulbs.trigger("light:on");
    }
});
```
