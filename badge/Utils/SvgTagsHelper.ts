

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


