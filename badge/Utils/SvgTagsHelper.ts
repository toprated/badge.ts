class SvgTagsHelper {

    static svg(): SVGSVGElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "svg");
    }

    static rect(): SVGRectElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "rect");
    }

    static text(): SVGTextElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "text");
    }

    static g(): SVGGElement {
        return document.createElementNS("http://www.w3.org/2000/svg", "g");
    }
}