/// <reference path="./common/UrlHelper.ts"/>
/// <reference path="./common/DarkBadgeStyle.ts"/>
/// <reference path="./common/LightBadgeStyle.ts"/>
/// <reference path="./interfaces/IBadgeDataSmall.ts"/>
/// <reference path="./interfaces/IBadgeData.ts"/>
/// <reference path="./interfaces/IBadge.ts"/>

class Badge implements IBadge{
    targetElement: HTMLElement;
    style: IBadgeStyle;

    constructor(element: HTMLElement) {
        this.targetElement = element;
        const badgeStyle = this.getStyle();
        this.style = badgeStyle;
    }

    getStyle(): IBadgeStyle {
        let style: IBadgeStyle;

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
                style = new BadgeStyle();
                break;
        }

        return style;
    }

    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData): void {
        const badge = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        for (let section of badgeData.sections) {
            //var s = JSON.parse(section);
            console.log("s: " + section.text);    
        }
        this.targetElement.appendChild(badge);
    }

    buildBadge(badgeDataPath: string): void {

        let data: IBadgeData;

        const req = new XMLHttpRequest();
        req.open("get", badgeDataPath, true);
        req.send();
        req.onreadystatechange = () => {
            if (req.readyState !== 4) return;
            if (req.status !== 200) {
                console.log(`Error while loading .json data! Request status: ${req.status} : ${req.statusText}`);
            } else {
                data = JSON.parse(req.responseText);
                this.buildSvg(this.style, data);
            }
        }
    }
}

// ReSharper disable once InconsistentNaming
declare function SVG(name: string): any;

function buildSvgBadge(repoData: IBadgeDataSmall) {
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
    var data: IBadgeDataSmall;
    req.open("get", "./data.json", true);
    req.send();
    req.onreadystatechange = () => {
        if (req.readyState !== 4) return;
        if (req.status !== 200) {
            console.log(req.status + ": " + req.statusText);
        } else {
            data = JSON.parse(req.responseText);
            buildSvgBadge(data);
        }
    }
}

function buildBadgeById(id: string) {
    console.log("id: " + id);
    var target = document.getElementById(id);
    const badge = new Badge(target);
    badge.buildBadge("./badgeData.json");
}

//window.onload = onLoadFunc;
