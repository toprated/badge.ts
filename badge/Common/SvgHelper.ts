class SvgHelper {

    targetElement: HTMLElement;

    constructor(element: HTMLElement) {
        this.targetElement = element;
    }

    buildSvgRect() {
        var svg = document.documentElement;
        var svgNS = svg.namespaceURI;

        var rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('x', '5');
        rect.setAttribute('y', '5');
        rect.setAttribute('width', '500');
        rect.setAttribute('height', '500');
        rect.setAttribute('fill', '#95B3D7');
        svg.appendChild(rect);
        document.body.appendChild(svg);

        var h = document.createElement('a');
        var t = document.createTextNode('Hello World');
        h.appendChild(t);
        document.body.appendChild(h);
    }
}