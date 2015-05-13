(function() {
	HTMLElement.prototype.tap = function(fn) {
		var f = function() {
			var dt = new Date().getTime();
			if(event.type == "touchstart") {
				this.isTouchStart = true;
				this.lastTouchStart = dt;
			} else if((this.isTouchStart==true)&&(dt - this.lastTouchStart < 30)&&(dt - this.lastTouchStart > 0)) {
				this.isTouchStart = false;
				fn.call(this);
			}
		}
		if(this.addEventListener) {
			this.addEventListener("touchstart", f);
			this.addEventListener("touchend", f);
		} else {
			this.attachEvent("ontouchstart", f);
			this.attachEvent("ontouchend", f);
		}
		this.isTouchStart = false;
		this.lastTouchStart = new Date().getTime();
	}
})();