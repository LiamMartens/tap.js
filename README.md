#TAP.JS
`tap.js` is a very simple library for handling a `tap` instead of having to mess around with `touchstart` and `touchend`.

##Usage
Just include the script anywhere in your page (it doesn't have to be at the end of the body and neither does it have to be located inside the head). It will extend the `HTMLElement` object with a new `tap` function. The function can accept 3 parameters at maximum. The first one is the function to be called when the element is tapped or clicked. The second one defines the number of miliseconds between function calls, this defaults to 60 miliseconds and ensures the function doesn't get called twice because of click and touch support on the same device. The third one is the tap interval in miliseconds and this defines the maximum number of miliseconds between touchstart and touchend, this also defaults to 60.

##Example
```
    var el = document.querySelector("div");
    el.tap(function() {
        console.log("tapped");
    });
    el.tap(function(){}, 60);
    el.tap(function(){}, 60, 60);
```