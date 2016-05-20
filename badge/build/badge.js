class BadgeSection {
    constructor(text, bcgColor) {
        this.text = text;
        this.bcgColor = bcgColor;
    }
}
class Color {
}
Color.silver = "#C0C0C0";
Color.gray = "#808080";
Color.white = "#FFF";
Color.black = "#000";
Color.gold = "#FFD700";
class FontStyle {
    constructor(fFamily, fSize, fColor, fShadowColor) {
        this.fontFamily = fFamily;
        this.fontSize = fSize;
        this.fontColor = fColor;
        this.fontShadowColor = fShadowColor;
    }
}
class SectionStyle {
    constructor(fStyle, bcgColor) {
        this.fontStyle = fStyle;
        this.backgroundColor = bcgColor;
    }
}
class BadgeStyle {
    constructor() {
        this.indent = 3;
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
class DarkBadgeStyle {
    constructor() {
        this.indent = 3;
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
class LightBadgeStyle {
    constructor() {
        this.indent = 3;
        const commonFontStyle = new FontStyle("DejaVu Sans,Verdana,Geneva,sans-serif", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
var Theme;
(function (Theme) {
    Theme[Theme["Light"] = 0] = "Light";
    Theme[Theme["Dark"] = 1] = "Dark";
    Theme[Theme["Custom"] = 2] = "Custom";
})(Theme || (Theme = {}));
class UrlHelper {
    getParameter(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        const regexS = `[\\?&]${name}=([^&#]*)`;
        const regex = new RegExp(regexS);
        const results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }
    getTheme() {
        const themeString = this.getParameter("theme");
        switch (themeString) {
            case "dark":
                return Theme.Dark;
            case "light":
                return Theme.Light;
            default:
                return Theme.Light;
        }
    }
}
SVGSVGElement.prototype.setWidth = function (value) {
    this.setAttribute("width", String(value));
    return this;
};
SVGSVGElement.prototype.setHeight = function (value) {
    this.setAttribute("height", String(value));
    return this;
};
SVGTextElement.prototype.setX = function (value) {
    this.setAttribute("x", String(value));
    return this;
};
SVGTextElement.prototype.setY = function (value) {
    this.setAttribute("y", String(value));
    return this;
};
SVGTextElement.prototype.fontFamily = function (value) {
    this.setAttribute("font-family", value);
    return this;
};
SVGTextElement.prototype.fontSize = function (value) {
    this.setAttribute("font-size", String(value));
    return this;
};
SVGTextElement.prototype.fill = function (value) {
    this.setAttribute("fill", value);
    return this;
};
SVGTextElement.prototype.getTextRect = function () {
    const el = this;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "svg-id";
    svg.appendChild(el);
    document.body.appendChild(svg);
    const rect = el.getBBox();
    document.body.removeChild(svg);
    return rect;
};
SVGRectElement.prototype.setX = function (value) {
    this.setAttribute("x", String(value));
    return this;
};
SVGRectElement.prototype.setY = function (value) {
    this.setAttribute("y", String(value));
    return this;
};
SVGRectElement.prototype.setRx = function (value) {
    this.setAttribute("rx", String(value));
    return this;
};
SVGRectElement.prototype.setRy = function (value) {
    this.setAttribute("ry", String(value));
    return this;
};
SVGRectElement.prototype.setR = function (value) {
    this
        .setRx(value)
        .setRy(value);
    return this;
};
SVGRectElement.prototype.setWidth = function (value) {
    this.setAttribute("width", String(value));
    return this;
};
SVGRectElement.prototype.setHeight = function (value) {
    this.setAttribute("height", String(value));
    return this;
};
SVGRectElement.prototype.fill = function (value) {
    this.setAttribute("fill", value);
    return this;
};
class HtmlElementHelper {
    constructor(el) {
        this.e = el;
        this.txt = el.innerText;
        this.fontname = el.getAttribute("font-family");
        this.fontsize = el.getAttribute("font-size");
    }
    getWidthOfText() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.font = this.fontsize + "px" + this.fontname;
        const length = ctx.measureText(this.txt).width;
        return length;
    }
}
class SvgTextElementHelper {
    constructor(el) {
        this.e = el;
        this.txt = el.textContent;
        this.fontname = el.getAttribute("font-family");
        this.fontsize = el.getAttribute("font-size");
    }
    getWidthOfText() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.font = this.fontsize + "px" + this.fontname;
        const length = ctx.measureText(this.txt).width;
        console.log("w = " + length);
        return length;
    }
}
class SvgTagsHelper {
    static createSvg(id = "") {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (id !== "") {
            el.id = id;
        }
        return el;
    }
    static createRect(id = "") {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        if (id !== "") {
            el.id = id;
        }
        return el;
    }
    static createText(text = "") {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
        if (text !== "") {
            el.textContent = text;
        }
        return el;
    }
    static createG(id = "") {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "g");
        if (id !== "") {
            el.id = id;
        }
        return el;
    }
    static getRectText(text, fontStyle) {
        const rect = this
            .createText(text)
            .fontFamily(fontStyle.fontFamily)
            .fontSize(fontStyle.fontSize)
            .fill(fontStyle.fontColor)
            .getTextRect();
        return rect;
    }
}
class Badge {
    constructor(element) {
        this.targetHtmlElement = element;
        const badgeStyle = this.getStyle();
        this.style = badgeStyle;
    }
    getStyle() {
        let style;
        const urlHelper = new UrlHelper();
        const theme = urlHelper.getTheme();
        switch (theme) {
            case Theme.Dark:
                style = new DarkBadgeStyle();
                break;
            case Theme.Light:
                style = new LightBadgeStyle();
                break;
            default:
                style = new LightBadgeStyle();
                break;
        }
        return style;
    }
    buildSvg(badgeStyle, badgeData) {
        const badge = SvgTagsHelper.createSvg("svg-badge");
        const badgeMainGroup = SvgTagsHelper.createG("main-group");
        let badgeWidth = 0;
        let badgeHeight = 0;
        for (let section of badgeData.sections) {
            const fontStyle = badgeStyle.commonTextStyle.fontStyle;
            const sectionTextRect = SvgTagsHelper.getRectText(section.text, fontStyle);
            const sectionWidth = badgeStyle.indent * 2 + sectionTextRect.width;
            const sectionHeight = badgeStyle.indent * 2 + sectionTextRect.height;
            const sectionText = SvgTagsHelper.createText(section.text);
            sectionText
                .fontFamily(fontStyle.fontFamily)
                .fontSize(fontStyle.fontSize)
                .fill(fontStyle.fontColor)
                .setX(badgeWidth + sectionWidth / 2)
                .setY(sectionHeight / 2);
            sectionText.setAttribute("text-anchor", "middle");
            sectionText.setAttribute("alignment-baseline", "central");
            const sectionTextShadow = SvgTagsHelper.createText(section.text);
            sectionTextShadow
                .fontFamily(fontStyle.fontFamily)
                .fontSize(fontStyle.fontSize)
                .fill(fontStyle.fontShadowColor)
                .setX(badgeWidth + sectionWidth / 2)
                .setY(sectionHeight / 2 + 1);
            sectionTextShadow.setAttribute("text-anchor", "middle");
            sectionTextShadow.setAttribute("alignment-baseline", "central");
            const sectionRect = SvgTagsHelper.createRect();
            sectionRect
                .fill(section.bcgColor)
                .setWidth(sectionWidth)
                .setHeight(sectionHeight)
                .setX(badgeWidth)
                .setY(0)
                .setR(3);
            badgeWidth += sectionWidth;
            if (badgeHeight < sectionHeight) {
                badgeHeight = sectionHeight;
            }
            badgeMainGroup.appendChild(sectionRect);
            badgeMainGroup.appendChild(sectionTextShadow);
            badgeMainGroup.appendChild(sectionText);
        }
        badge.appendChild(badgeMainGroup);
        badge
            .setWidth(badgeWidth)
            .setHeight(badgeHeight);
        this.targetHtmlElement.appendChild(badge);
    }
    buildBadge(badgeDataPath) {
        let data;
        const req = new XMLHttpRequest();
        req.open("get", badgeDataPath, true);
        req.send();
        req.onreadystatechange = () => {
            if (req.readyState !== 4)
                return;
            if (req.status !== 200) {
                console.log(`Error while loading .json data! Request status: ${req.status} : ${req.statusText}`);
            }
            else {
                data = JSON.parse(req.responseText);
                this.buildSvg(this.style, data);
            }
        };
    }
}
function buildSvgBadge(repoData) {
    const repoName = repoData.name;
    const place = repoData.place;
    const r = 3;
    const h = 20;
    const textSize = 11;
    const draw = SVG("mysvg").size(200, h);
    const str = repoName + " is #" + place;
    const test = "test";
    const fontFamily = "Verdana";
    const txtRepoName = draw.text(str);
    txtRepoName.size(textSize);
    txtRepoName.x(5);
    txtRepoName.fill(Color.black);
    txtRepoName.font({
        family: fontFamily,
        y: 0
    });
    const txtRepoNameShadow = draw.text(str);
    txtRepoNameShadow.size(textSize);
    txtRepoNameShadow.x(5);
    txtRepoNameShadow.fill(Color.white);
    txtRepoNameShadow.font({
        family: fontFamily,
        y: 1
    });
    const rectRepoName = draw.rect(txtRepoName.length() + 10, h);
    rectRepoName.attr({ fill: Color.silver });
    rectRepoName.radius(r);
    const txt = draw.text(test);
    txt.x(rectRepoName.width());
    txt.y(7);
    txt.fill("#855");
    txt.font({
        background: "#155",
        family: "Verdana",
        size: 11
    });
    txtRepoNameShadow.front();
    txtRepoName.front();
    txt.front();
}
function onLoadFunc() {
    const req = new XMLHttpRequest();
    var data;
    req.open("get", "./data.json", true);
    req.send();
    req.onreadystatechange = () => {
        if (req.readyState !== 4)
            return;
        if (req.status !== 200) {
            console.log(req.status + ": " + req.statusText);
        }
        else {
            data = JSON.parse(req.responseText);
            buildSvgBadge(data);
        }
    };
}
function buildBadgeById(id) {
    const target = document.getElementById(id);
    const badge = new Badge(target);
    badge.buildBadge("./badgeData.json");
}
//# sourceMappingURL=badge.js.map