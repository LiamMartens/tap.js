#TAP.JS
`tap.js` is a very simple library for handling a `tap` instead of having to mess around with `touchstart` and `touchend`.

##Usage
Just include the script anywhere in your page (it doesn't have to be at the end of the body and neither does it have to be located inside the head). It will extend the `HTMLElement` object with a new `tap` function which accpepts 1 parameter being the function to execute.  

##Example
```
    var el = document.querySelector("div");
    el.tap(function() {
        console.log("tapped");
    });
```