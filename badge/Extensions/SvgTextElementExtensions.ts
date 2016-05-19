interface SVGTextElement {
    setX(value: number): SVGTextElement;
    setY(value: number): SVGTextElement;
    getComputedWidth(): number;
}

SVGTextElement.prototype.setX = function (value: number): SVGTextElement {
    const el: SVGTextElement = this;
    el.setAttribute("x", String(value));
    return this;
}

SVGTextElement.prototype.setY = (value: number): SVGTextElement => {
    var el: SVGTextElement = this;
    el.setAttribute("y", String(value));
    return el;
}

SVGTextElement.prototype.getComputedWidth = (): number => {
    const txt = this.textContent;
    const fontname = this.getAttribute("font-family");
    const fontsize = this.getAttribute("font-size");
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    ctx.font = fontsize + "px" + fontname;
    const length = ctx.measureText(txt).width;
    return length;
}

