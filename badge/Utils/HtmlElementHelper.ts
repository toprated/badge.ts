class HtmlElementHelper {

    e: HTMLElement;
    txt: string;
    fontname: string;
    fontsize: string;

    constructor(el: HTMLElement) {
        this.e = el;
        this.txt = el.innerText;
        this.fontname = el.getAttribute("font-family");
        this.fontsize = el.getAttribute("font-size");
    }

    getWidthOfText(): number {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.font = this.fontsize + "px" + this.fontname;
        const length = ctx.measureText(this.txt).width;
        return length;
    }
    
    //getWidthOfText(txt, fontname, fontsize): number {

}