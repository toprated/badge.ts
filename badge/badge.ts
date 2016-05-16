/// <reference path="./common/Colors.ts"/>
/// <reference path="./common/UrlHelper.ts"/>
/// <reference path="./interfaces/IBadgeData.ts"/>
/// <reference path="./interfaces/IBadgeStyle.ts"/>
/// <reference path="./interfaces/IBadge.ts"/>


class Badge implements IBadge{
    targetElement: HTMLElement;
    style: IBadgeStyle;

    constructor(element: HTMLElement) {
        this.targetElement = element;
    }

    buildBadge(badgeData: IBadgeData): void {
        
    }

    getStyle(): IBadgeStyle {
        let style: IBadgeStyle;

        const urlHelper = new UrlHelper();
        const theme = urlHelper.getTheme();



        return style;
    }
}


// ReSharper disable once InconsistentNaming
declare function SVG(name: string): any;

function buildSvg(repoData: IBadgeData) {
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
    var data: IBadgeData;
    req.open("get", "./data.json", true);
    req.send();
    req.onreadystatechange = () => {
        if (req.readyState !== 4) return;
        if (req.status !== 200) {
            console.log(req.status + ": " + req.statusText);
        } else {
            data = JSON.parse(req.responseText);
            buildSvg(data);
        }
    }
}

//window.onload = onLoadFunc;
