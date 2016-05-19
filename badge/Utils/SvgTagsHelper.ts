

class SvgTagsHelper {

    static svg(): SVGSVGElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "svg");
    }

    static rect(): SVGRectElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "rect");
    }

    static text(text: string = ""): SVGTextElement {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
        el.textContent = text;
        return el;
    }

    static g(): SVGGElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "g");
    }
}


