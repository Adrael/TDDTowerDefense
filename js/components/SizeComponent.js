SizeComponent.prototype = new Component();
SizeComponent.prototype.constructor = SizeComponent;

function SizeComponent(width, height) {

    Component.call(this);
    this.TID = 'SizeComponent';

    this.setSize(width, height);

    return this;

};

SizeComponent.prototype.setSize = function (width, height) {

    this.width = width;
    this.height = height;

    return this;

};

SizeComponent.prototype.getSize = function () {

    return {
        width : this.width,
        height : this.height
    };

};