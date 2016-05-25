/// <reference path="./Common/UrlHelper.ts"/>
/// <reference path="./Common/DarkBadgeStyle.ts"/>
/// <reference path="./Common/LightBadgeStyle.ts"/>
/// <reference path="./Enums/BuildType.ts"/>
/// <reference path="./Extensions/HtmlElementExtensions.ts"/>
/// <reference path="./Extensions/SvgElementExtensions.ts"/>
/// <reference path="./Extensions/SvgTextElementExtensions.ts"/>
/// <reference path="./Extensions/SvgRectElementExtensions.ts"/>
/// <reference path="./Interfaces/IBadgeData.ts"/>
/// <reference path="./Interfaces/IBadge.ts"/>
/// <reference path="./Utils/BadgeSectionHelper.ts"/>
/// <reference path="./Utils/SvgTextElementHelper.ts"/>
/// <reference path="./Utils/SvgTagsHelper.ts"/>

class Badge implements IBadge {
    caller: HTMLElement;
    targetHtmlElement: HTMLElement;
    targetSvgElement: HTMLElement;
    style: IBadgeStyle;
    theme: Theme;
    urlHelper: IUrlHelper;

    constructor() {
        this.urlHelper = new UrlHelper();
        this.theme = this.urlHelper.getTheme();

        const badgeStyle = this.getStyle();
        this.style = badgeStyle;
    }

    setHtmlTarget(target: HTMLElement) {
        this.targetHtmlElement = target;
    }

    setSvgTarget(target: HTMLElement) {
        this.targetSvgElement = target;
    }

    setCaller(caller: HTMLElement) {
        this.caller = caller;
    }

    getStyle(): IBadgeStyle {
        let style: IBadgeStyle;
        
        switch (this.theme) {
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
    
    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData, buildType: BuildType): void {
        
        const badgeMainGroup = SvgTagsHelper.createG("main-group");

        let badgeWidth = 0;
        let badgeHeight = 0;

        const sectionsCount = badgeData.sections.length;
        let currentSection = 0;

        for (let section of badgeData.sections) {
        
            currentSection++;
            const sectionResult = BadgeSectionHelper
                .getSection(section, currentSection, sectionsCount, badgeWidth, badgeHeight, badgeStyle, this.caller);

            badgeWidth += sectionResult.rect.width;
            if (badgeHeight < sectionResult.rect.height) {
                badgeHeight = sectionResult.rect.height;
            }
            
            badgeMainGroup.appendChild(sectionResult.node);
        }

        const gradienId = "badge-gradient-id";
        const badgeGradient = SvgTagsHelper.createLinearGradient(gradienId, "0%", "0%", "0%", "90%", "10%", "90%", "white", "black", "0.1");

        const badgeGradientRect = SvgTagsHelper.createSimpleRoundedRect(0, 0, badgeWidth, badgeHeight, badgeStyle.radius, `url(#${gradienId})`);
        badgeMainGroup.appendChild(badgeGradientRect);

        switch (buildType) {
            case BuildType.Full:
                {

                    const badge = SvgTagsHelper.createSvg("svg-badge");
                    badge.appendChild(badgeGradient);
                    badge.appendChild(badgeMainGroup);

                    badge
                        .setWidth(badgeWidth)
                        .setHeight(badgeHeight);

                    this.targetHtmlElement.appendChild(badge);
                    break;
                }
            case BuildType.InsideSvg:
                {
                    this.targetSvgElement.appendChild(badgeGradient);
                    this.targetSvgElement.appendChild(badgeMainGroup);
                    this.targetSvgElement
                        .setWidth(badgeWidth)
                        .setHeight(badgeHeight);


                    break;
                }
        default:
            throw Error("Unknown BuildType!");
        }

    }

    buildBadgeByData(data: IBadgeData, buildType: BuildType): void {
        this.buildSvg(this.style, data, buildType);
    }

    buildBadgeFromJson(badgeDataPath: string, buildType: BuildType): void {

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
                this.buildSvg(this.style, data, buildType);
            }
        }
    }

    buildBadgeFromJsons(badgeStylePath: string, badgeDataPath: string, buildType: BuildType): void {

        let data: IBadgeData;
        let style: IBadgeStyle;

        const req1 = new XMLHttpRequest();
        req1.open("get", badgeDataPath, true);
        req1.send();
        req1.onreadystatechange = () => {
            if (req1.readyState !== 4) return;
            if (req1.status !== 200) {
                console.log(`Error while loading .json data! Request status: ${req1.status} : ${req1.statusText}`);
            } else {
                data = JSON.parse(req1.responseText);
                const req2 = new XMLHttpRequest();
                req2.open("get", badgeStylePath, true);
                req2.send();
                req2.onreadystatechange = () => {
                    if (req2.readyState !== 4) return;
                    if (req2.status !== 200) {
                        console.log(`Error while loading .json style! Request status: ${req2.status} : ${req2.statusText}`);
                    } else {
                        style = JSON.parse(req2.responseText);
                        this.buildSvg(style, data, buildType);
                    }
                }
            }
        }
    }
}
