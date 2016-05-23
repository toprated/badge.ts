interface SVGTextElement {
    setX(value: number): SVGTextElement;
    setY(value: number): SVGTextElement;
    fontFamily(value: string): SVGTextElement;
    fontSize(value: number): SVGTextElement;
    fill(value: string): SVGTextElement;
    fillOpacity(value: string): SVGTextElement;
    getTextRect(caller: HTMLElement): SVGRect;
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

SVGTextElement.prototype.fillOpacity = function (value: string): SVGTextElement {
    this.setAttribute("fill-opacity", value);
    return this;
}

SVGTextElement.prototype.getTextRect = function (caller: HTMLElement = undefined): SVGRect {

    const el = this;
    let rect: SVGRect;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.appendChild(el);

    if (document.body === null) {
        document.getElementById(caller.id).appendChild(svg);
        rect = el.getBBox();
        document.getElementById(caller.id).removeChild(svg);
    } else {
        document.body.appendChild(svg);
        rect = el.getBBox();
        document.body.removeChild(svg);
    }
    return rect;
}

