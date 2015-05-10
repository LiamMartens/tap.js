(function() {
	HTMLElement.prototype.tap = function(fn) {
		var f = function() {
			if(event.type == "touchstart") {
				this.isTouchStart = true;
				this.lastTouchStart = new Date().getTime();
			} else if((this.isTouchStart==true)&&(new Date().getTime() - this.lastTouchStart < 60)) {
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