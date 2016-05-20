﻿interface SVGTextElement {
    setX(value: number): SVGTextElement;
    setY(value: number): SVGTextElement;
    fontFamily(value: string): SVGTextElement;
    fontSize(value: number): SVGTextElement;
    fill(value: string): SVGTextElement;
    getComputedWidth(): number;
    getTextRect(): SVGRect;
}

SVGTextElement.prototype.setX = function (value: number): SVGTextElement {
    this.setAttribute("x", String(value));
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

SVGTextElement.prototype.getTextRect = function (): SVGRect {

    const el = this;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "svg-id";
    svg.appendChild(el);
    document.body.appendChild(svg);

    const rect = el.getBBox();
    
    document.body.removeChild(svg);

    return rect;
}

