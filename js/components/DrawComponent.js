DrawComponent.prototype = new Component();
DrawComponent.prototype.constructor = DrawComponent;

function DrawComponent(red, green, blue, alpha) {

	Component.call(this);
	this.TID = 'DrawComponent';

    this.setColor(red, green, blue, alpha);

    return this;

};

DrawComponent.prototype.setColor = function (red, green, blue, alpha) {

    this.setRed(red);
    this.setGreen(green);
    this.setBlue(blue);
    this.setAlpha(alpha);

    return this;

};

DrawComponent.prototype.getColorAsString = function () {

    return 'rgba(' + this.red + ', ' + this.green + ', ' + this.blue + ', ' + this.alpha + ')';

};

DrawComponent.prototype.getColor = function () {

    return {
        red: this.red,
        green: this.green,
        blue: this.blue,
        alpha: this.alpha
    }

};

DrawComponent.prototype.setRed = function (red) {

    if(red === null || red === undefined) {

        red = 255;

    }

    this.red = red;
    return this;

};

DrawComponent.prototype.setGreen = function (green) {

    if(green === null || green === undefined) {

        green = 255;

    }

    this.green = green;
    return this;

};

DrawComponent.prototype.setBlue = function (blue) {

    if(blue === null || blue === undefined) {

        blue = 255;

    }

    this.blue = blue;
    return this;

};

DrawComponent.prototype.setAlpha = function (alpha) {

    if(alpha === null || alpha === undefined) {

        alpha = 1;

    }

    this.alpha = alpha;
    return this;

};