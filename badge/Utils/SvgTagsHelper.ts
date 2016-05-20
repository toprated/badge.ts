

class SvgTagsHelper {

    static createSvg(id: string = ""): SVGSVGElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (id !== "") {
            el.id= id;
        }
        return el;
    }

    static createRect(id: string = ""): SVGRectElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (id !== "") {
            el.id = id;
        }
        return el;
    }

    static p(x: number, y: number): string {
        return x + " " + y + " ";
    }

    static createRoundedRect(x: number, y: number, w: number, h: number, r1: number, r2: number, r3: number, r4: number, color: string): SVGPathElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "path");

        let path = "M" + this.p(x + r1, y); //A
        path += "L" + this.p(x + w - r2, y) + "Q" + this.p(x + w, y) + this.p(x + w, y + r2); //B
        path += "L" + this.p(x + w, y + h - r3) + "Q" + this.p(x + w, y + h) + this.p(x + w - r3, y + h); //C
        path += "L" + this.p(x + r4, y + h) + "Q" + this.p(x, y + h) + this.p(x, y + h - r4); //D
        path += "L" + this.p(x, y + r1) + "Q" + this.p(x, y) + this.p(x + r1, y); //A
        path += "Z";

        el.setAttribute("d", path);
        el.setAttribute("fill", color);
        return el;
    }

    static createText(text: string = ""): SVGTextElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if (text !== "") {
            el.textContent = text;
        }
        return el;
    }

    static createG(id: string = ""): SVGGElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (id !== "") {
            el.id = id;
        }
        return el;
    }

    static getRectText(text: string, fontStyle: IFontStyle): SVGRect {
        const rect = this
            .createText(text)
            .fontFamily(fontStyle.fontFamily)
            .fontSize(fontStyle.fontSize)
            .fill(fontStyle.fontColor)
            .getTextRect();
        return rect;
    }
}


