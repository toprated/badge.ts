var Color;
(function (Color) {
    Color[Color["Gold"] = 0] = "Gold";
    Color[Color["Silver"] = 1] = "Silver";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["White"] = 3] = "White";
    Color[Color["Gray"] = 4] = "Gray";
})(Color || (Color = {}));
/// <reference path="./../enums/Color.ts"/>
var Colors;
(function (Colors) {
    const silver = "#C0C0C0";
    const gray = "#808080";
    const white = "#FFF";
    const black = "#000";
    const gold = "#FFD700";
    function get(color) {
        switch (color) {
            case Color.Gold:
                return gold;
            case Color.Silver:
                return silver;
            case Color.Black:
                return black;
            case Color.White:
                return white;
            case Color.Gray:
                return gray;
            default:
                return null;
        }
    }
    Colors.get = get;
})(Colors || (Colors = {}));
var Theme;
(function (Theme) {
    Theme[Theme["Light"] = 0] = "Light";
    Theme[Theme["Dark"] = 1] = "Dark";
})(Theme || (Theme = {}));
/// <reference path="./../enums/Theme.ts"/>
/// <reference path="./../interfaces/IUrlHelper.ts"/>
var badge;
(function (badge) {
    var Common;
    (function (Common) {
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
    })(Common = badge.Common || (badge.Common = {}));
})(badge || (badge = {}));
/// <reference path="./IFontStyle.ts"/>
/// <reference path="./ISectionStyle.ts"/>
/// <reference path="./common/Colors.ts"/>
/// <reference path="./common/UrlHelper.ts"/>
/// <reference path="./interfaces/IBadgeData.ts"/>
/// <reference path="./interfaces/IBadgeStyle.ts"/>
/// <reference path="./interfaces/IBadge.ts"/>
class Badge {
    constructor(element) {
        this.targetElement = element;
    }
    buildBadge(badgeData) {
    }
    getStyle() { throw new Error("Not implemented"); }
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
    txtRepoName.fill(Colors.get(Color.Black));
    txtRepoName.font({
        family: fontFamily,
        y: 0
    });
    const txtRepoNameShadow = draw.text(str);
    txtRepoNameShadow.size(textSize);
    txtRepoNameShadow.x(5);
    txtRepoNameShadow.fill(Colors.get(Color.White));
    txtRepoNameShadow.font({
        family: fontFamily,
        y: 1
    });
    const rectRepoName = draw.rect(txtRepoName.length() + 10, h);
    rectRepoName.attr({ fill: Colors.get(Color.Silver) });
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