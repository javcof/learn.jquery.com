### Event Helpers
jQuery 提供了一些事件相关的帮助函数，`.hover()` 函数就是其中的一个。

`.hover()`

当一个元素上触发 `mouseenter` 和 `mouseleave` 事件时，需要给 `hover()` 方法传递两个函数。如果只传递了一个函数，会被两个事件触发；如果传递了两个函数，第一个会被 `mouseenter` 事件触发，第二个则会被 `mouseleave` 事件触发。

**备注：** jQuery 1.4 以前的版本, `.hover()` 方法必须传递两个函数。

```javascript
// The hover helper function
$("#menu li").hover(function() {
    $(this).toggleClass("hover");
})
```
You can find more helper functions on the [API site for Events](https://api.jquery.com/category/events/).
