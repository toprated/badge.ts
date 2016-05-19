interface SVGTextElement {
    setX(value: string): SVGTextElement;
    setY(value: string): this;
    getComputedWidth(): number;
}

SVGTextElement.prototype.setX = (value: string): SVGTextElement => {
    //var el: SVGTextElement = this;
    //el.setAttribute("x", value);

    console.log("x");

    return this;
}

SVGTextElement.prototype.setY = (value: string): SVGTextElement => {
    var el: SVGTextElement = this as SVGTextElement;
    console.log("v: " + value);
    console.log("t: " + this);
    console.log("e: " + el);
    //el.setAttribute("y", value);
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

