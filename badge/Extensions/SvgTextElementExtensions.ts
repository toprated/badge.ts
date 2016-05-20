interface SVGTextElement {
    setX(value: number): SVGTextElement;
    setY(value: number): SVGTextElement;
    fontFamily(value: string): SVGTextElement;
    fontSize(value: number): SVGTextElement;
    fill(value: string): SVGTextElement;
    getComputedWidth(): number;
}

SVGTextElement.prototype.setX = function (value: number): SVGTextElement {
    const el: SVGTextElement = this;
    el.setAttribute("x", String(value));
    return this;
}

SVGTextElement.prototype.setY = function (value: number): SVGTextElement {
    this.setAttribute("y", String(value));
    return this;
}

SVGTextElement.prototype.fontFamily = function (value: string): SVGTextElement {
    this.setAttribute("font-family", value);
    return this;
}

SVGTextElement.prototype.fontSize = function (value: number): SVGTextElement {
    this.setAttribute("font-size", String(value));
    return this;
}

SVGTextElement.prototype.fill = function (value: string): SVGTextElement {
    this.setAttribute("fill", value);
    return this;
}

SVGTextElement.prototype.getComputedWidth = function (): number {
    const txt = this.textContent;
    const fontname = this.getAttribute("font-family");
    const fontsize = this.getAttribute("font-size");
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    ctx.font = fontsize + "px" + fontname;
    const length = ctx.measureText(txt).width;
    return length;
}

