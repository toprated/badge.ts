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
        this.indent = 5;
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
class DarkBadgeStyle {
    constructor() {
        this.indent = 5;
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
class LightBadgeStyle {
    constructor() {
        this.indent = 5;
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
SVGTextElement.prototype.setX = (value) => {
    console.log("x");
    return this;
};
SVGTextElement.prototype.setY = (value) => {
    var el = this;
    console.log("v: " + value);
    console.log("t: " + this);
    console.log("e: " + el);
    return el;
};
SVGTextElement.prototype.getComputedWidth = () => {
    const txt = this.textContent;
    const fontname = this.getAttribute("font-family");
    const fontsize = this.getAttribute("font-size");
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    ctx.font = fontsize + "px" + fontname;
    const length = ctx.measureText(txt).width;
    return length;
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
        return length;
    }
}
class SvgTagsHelper {
    static svg() {
        return document.createElementNS("http://www.w3.org/2000/svg", "svg");
    }
    static rect() {
        return document.createElementNS("http://www.w3.org/2000/svg", "rect");
    }
    static text(text = "") {
        const el = document.createElementNS("http://www.w3.org/2000/svg", "text");
        el.textContent = text;
        return el;
    }
    static g() {
        return document.createElementNS("http://www.w3.org/2000/svg", "g");
    }
}
class Badge {
    constructor(element) {
        this.targetElement = element;
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
        const badge = SvgTagsHelper.svg();
        const badgeMainGroup = SvgTagsHelper.g();
        badgeMainGroup.setAttribute("text-anchor", "middle");
        badgeMainGroup.id = "mainGroup";
        let badgeWidth = 0;
        let badgeHeight = 0;
        for (let section of badgeData.sections) {
            let sectionWidth = 0;
            let sectionHeight = 0;
            const sectionText = SvgTagsHelper.text();
            sectionText.textContent = section.text;
            sectionText.setAttribute("font-family", badgeStyle.commonTextStyle.fontStyle.fontFamily);
            sectionText.setAttribute("font-size", badgeStyle.commonTextStyle.fontStyle.fontSize.toString());
            sectionText.setAttribute("fill", badgeStyle.commonTextStyle.fontStyle.fontColor);
            sectionText.setX(badgeStyle.indent.toString() + badgeWidth);
            sectionText.setY((badgeWidth + 1).toString() + badgeHeight);
            const sectionTextShadow = SvgTagsHelper.text();
            sectionTextShadow.textContent = section.text;
            sectionTextShadow.setAttribute("font-family", badgeStyle.commonTextStyle.fontStyle.fontFamily);
            sectionTextShadow.setAttribute("font-size", badgeStyle.commonTextStyle.fontStyle.fontSize.toString());
            sectionTextShadow.setAttribute("fill", badgeStyle.commonTextStyle.fontStyle.fontShadowColor);
            sectionTextShadow.setAttribute("x", badgeStyle.indent.toString() + badgeWidth);
            sectionTextShadow.setAttribute("y", badgeWidth.toString() + badgeHeight);
            var sectionTextHelper = new SvgTextElementHelper(sectionText);
            sectionWidth = badgeStyle.indent * 2 + sectionTextHelper.getWidthOfText();
            sectionHeight = badgeStyle.indent * 2 + badgeStyle.commonTextStyle.fontStyle.fontSize;
            const sectionRect = SvgTagsHelper.rect();
            sectionRect.setAttribute("fill", badgeStyle.commonTextStyle.backgroundColor);
            sectionRect.setAttribute("width", sectionWidth.toString());
            sectionRect.setAttribute("height", sectionHeight.toString());
            sectionRect.setAttribute("x", badgeWidth.toString());
            sectionRect.setAttribute("y", badgeHeight.toString());
            badgeWidth += sectionWidth;
            badgeHeight += sectionHeight;
            badgeMainGroup.appendChild(sectionRect);
            badgeMainGroup.appendChild(sectionTextShadow);
            badgeMainGroup.appendChild(sectionText);
        }
        badge.appendChild(badgeMainGroup);
        badge.setAttribute("width", "200");
        badge.setAttribute("height", "20");
        this.targetElement.appendChild(badge);
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