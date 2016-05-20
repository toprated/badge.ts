interface SVGRectElement {
    setX(value: number): SVGRectElement;
    setY(value: number): SVGRectElement;
    setRx(value: number): SVGRectElement;
    setRy(value: number): SVGRectElement;
    setR(value: number): SVGRectElement;
    setWidth(value: number): SVGRectElement;
    setHeight(value: number): SVGRectElement;
    fill(value: string): SVGRectElement;
}

SVGRectElement.prototype.setX = function (value: number): SVGRectElement {
    this.setAttribute("x", String(value));
    return this;
}

SVGRectElement.prototype.setY = function (value: number): SVGRectElement {
    this.setAttribute("y", String(value));
    return this;
}

SVGRectElement.prototype.setRx = function (value: number): SVGRectElement {
    this.setAttribute("rx", String(value));
    return this;
}

SVGRectElement.prototype.setRy = function (value: number): SVGRectElement {
    this.setAttribute("ry", String(value));
    return this;
}

SVGRectElement.prototype.setR = function (value: number): SVGRectElement {
    this
        .setRx(value)
        .setRy(value);
    return this;
}

SVGRectElement.prototype.setWidth = function (value: number): SVGRectElement {
    this.setAttribute("width", String(value));
    return this;
}

SVGRectElement.prototype.setHeight = function (value: number): SVGRectElement {
    this.setAttribute("height", String(value));
    return this;
}

SVGRectElement.prototype.fill = function (value: string): SVGRectElement {
    this.setAttribute("fill", value);
    return this;
}

