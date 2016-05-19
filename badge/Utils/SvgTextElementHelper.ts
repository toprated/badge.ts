class SvgTextElementHelper {

    e: SVGTextElement;
    txt: string;
    fontname: string;
    fontsize: string;

    constructor(el: SVGTextElement) {
        this.e = el;
        this.txt = el.textContent;
        this.fontname = el.getAttribute("font-family");
        this.fontsize = el.getAttribute("font-size");
    }

    getWidthOfText(): number {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.font = this.fontsize + " " + this.fontname;
        const length = ctx.measureText(this.txt).width;
        console.log("w = " + length);
        return length;
    }
    
}