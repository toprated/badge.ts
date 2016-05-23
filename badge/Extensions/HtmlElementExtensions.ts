interface HTMLElement {
    setWidth(value: number): HTMLElement;
    setHeight(value: number): HTMLElement;
}

HTMLElement.prototype.setWidth = function (value: number): HTMLElement {
    this.setAttribute("width", String(value));
    return this;
}

HTMLElement.prototype.setHeight = function (value: number): HTMLElement {
    this.setAttribute("height", String(value));
    return this;
}