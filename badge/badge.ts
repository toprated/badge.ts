﻿/// <reference path="./Common/UrlHelper.ts"/>
/// <reference path="./Common/DarkBadgeStyle.ts"/>
/// <reference path="./Common/LightBadgeStyle.ts"/>
/// <reference path="./Enums/BuildType.ts"/>
/// <reference path="./Extensions/SvgElementExtensions.ts"/>
/// <reference path="./Extensions/SvgTextElementExtensions.ts"/>
/// <reference path="./Extensions/SvgRectElementExtensions.ts"/>
/// <reference path="./Interfaces/IBadgeData.ts"/>
/// <reference path="./Interfaces/IBadge.ts"/>
/// <reference path="./Utils/BadgeSectionHelper.ts"/>
/// <reference path="./Utils/SvgTextElementHelper.ts"/>
/// <reference path="./Utils/SvgTagsHelper.ts"/>

class Badge implements IBadge {
    targetHtmlElement: HTMLElement;
    targetSvgElement: HTMLElement;
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
            const sectionType = BadgeSectionHelper.getSectionType(currentSection, sectionsCount);

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

            badgeWidth += sectionWidth;
            if (badgeHeight < sectionHeight) {
                badgeHeight = sectionHeight;
            }
            
            badgeMainGroup.appendChild(sectionRect);
            badgeMainGroup.appendChild(sectionTextShadow);
            badgeMainGroup.appendChild(sectionText);
        }

        const gradienId = "badge-gradient-id";
        const badgeGradient = SvgTagsHelper.createLinearGradient(gradienId, "0%", "0%", "0%", "90%", "0%", "90%", "white", "black");

        const badgeGradientRect = SvgTagsHelper.createSimpleRoundedRect(0, 0, badgeWidth, badgeHeight, badgeStyle.radius, `url(#${gradienId})`);
        badgeMainGroup.appendChild(badgeGradientRect);

        badge.appendChild(badgeGradient);
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

function buildBadgeById(id: string) {
    const target = document.getElementById(id);
    const badge = new Badge(target);
    badge.buildBadge("./badgeData.json");
}

function buildBadgeInsideSvg(svgId: string) {
    const target = document.getElementById(svgId);
    const badge = new Badge(target);
    badge.buildBadge("./badgeData.json");
}
