/// <reference path="./IFontStyle.ts"/>
/// <reference path="./ISectionStyle.ts"/>
class Color {
}
Color.silver = "#C0C0C0";
Color.gray = "#808080";
Color.white = "#FFF";
Color.black = "#000";
Color.gold = "#FFD700";
/// <reference path="./../interfaces/IFontStyle.ts"/>
class FontStyle {
    constructor(fFamily, fSize, fColor, fShadowColor) {
        this.fontFamily = fFamily;
        this.fontSize = fSize;
        this.fontColor = fColor;
        this.fontShadowColor = fShadowColor;
    }
}
/// <reference path="./../interfaces/ISectionStyle.ts"/>
class SectionStyle {
    constructor(fStyle, bcgColor) {
        this.fontStyle = fStyle;
        this.backgroundColor = bcgColor;
    }
}
/// <reference path="./../interfaces/IBadgeStyle.ts"/>
/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>
class BadgeStyle {
    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>
/// <reference path="./../interfaces/IBadgeStyle.ts"/>
class DarkBadgeStyle {
    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}
/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>
/// <reference path="./../interfaces/IBadgeStyle.ts"/>
class LightBadgeStyle {
    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
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
/// <reference path="./../enums/Theme.ts"/>
/// <reference path="./../interfaces/IUrlHelper.ts"/>
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
/// <reference path="./common/UrlHelper.ts"/>
/// <reference path="./common/DarkBadgeStyle.ts"/>
/// <reference path="./common/LightBadgeStyle.ts"/>
/// <reference path="./common/Color.ts"/>
/// <reference path="./interfaces/IBadgeData.ts"/>
/// <reference path="./interfaces/IBadgeStyle.ts"/>
/// <reference path="./interfaces/IBadge.ts"/>
class Badge {
    constructor(element) {
        this.targetElement = element;
    }
    buildBadge(badgeData) {
    }
    getStyle() {
        let style;
        const urlHelper = new UrlHelper();
        const theme = urlHelper.getTheme();
        switch (theme) {
            case Theme.Dark:
                style = new DarkBadgeStyle();
            case Theme.Light:
                style = new LightBadgeStyle();
            default:
        }
        return style;
    }
}
function buildSvg(repoData) {
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
            buildSvg(data);
        }
    };
}
//window.onload = onLoadFunc;
//# sourceMappingURL=badge.js.map