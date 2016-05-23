﻿/// <reference path="./Common/UrlHelper.ts"/>
/// <reference path="./Common/DarkBadgeStyle.ts"/>
/// <reference path="./Common/LightBadgeStyle.ts"/>
/// <reference path="./Extensions/SvgElementExtensions.ts"/>
/// <reference path="./Extensions/SvgTextElementExtensions.ts"/>
/// <reference path="./Extensions/SvgRectElementExtensions.ts"/>
/// <reference path="./Interfaces/IBadgeDataSmall.ts"/>
/// <reference path="./Interfaces/IBadgeData.ts"/>
/// <reference path="./Interfaces/IBadge.ts"/>
/// <reference path="./Utils/BadgeSectionHelper.ts"/>
/// <reference path="./Utils/SvgTextElementHelper.ts"/>
/// <reference path="./Utils/SvgTagsHelper.ts"/>

class Badge implements IBadge{
    targetHtmlElement: HTMLElement;
    style: IBadgeStyle;

    constructor(element: HTMLElement) {
        this.targetHtmlElement = element;
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
                style = new LightBadgeStyle();
                break;
        }

        return style;
    }
    
    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData): void {

        const badge = SvgTagsHelper.createSvg("svg-badge");
        const badgeMainGroup = SvgTagsHelper.createG("main-group");

        let badgeWidth = 0;
        let badgeHeight = 0;

        const sectionsCount = badgeData.sections.length;
        let currentSection = 0;

        for (let section of badgeData.sections) {

            currentSection++;
            let sectionType = BadgeSectionHelper.getSectionType(currentSection, sectionsCount);

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

            const sectionRect = SvgTagsHelper.createSection(sectionType, badgeWidth, 0, sectionWidth, sectionHeight, badgeStyle.radius, section.bcgColor);
            //const sectionRect = SvgTagsHelper.createRoundedRect(badgeWidth, 0, sectionWidth, sectionHeight, 1, 3, 5, 7, section.bcgColor);

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
    const target = document.getElementById(id);
    const badge = new Badge(target);
    badge.buildBadge("./badgeData.json");
}
