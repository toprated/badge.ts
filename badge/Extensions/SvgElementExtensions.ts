interface SVGSVGElement {
    setWidth(value: number): SVGSVGElement;
    setHeight(value: number): SVGSVGElement;
}

SVGSVGElement.prototype.setWidth = function (value: number): SVGSVGElement {
    this.setAttribute("width", String(value));
    return this;
}

SVGSVGElement.prototype.setHeight = function (value: number): SVGSVGElement {
    this.setAttribute("height", String(value));
    return this;
}