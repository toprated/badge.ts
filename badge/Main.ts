/// <reference path="./Badge.ts"/>

function buildBadgeById(id: string, dataPath: string = "./badgeData.json") {
    const target = document.getElementById(id);
    const badge = new Badge();
    badge.setHtmlTarget(target);
    badge.buildBadgeFromJson(dataPath, BuildType.Full);
}

function buildBadgeInsideSvg(svgId: string, dataPath: string = "./badgeData.json") {
    const target = document.getElementById(svgId);
    const badge = new Badge();
    badge.setSvgTarget(target);
    badge.buildBadgeFromJson(dataPath, BuildType.InsideSvg);
}

function buildSvgBadge(el: HTMLElement, dataPath: string = "./badgeData.json") {
    const badge = new Badge();
    badge.setSvgTarget(el);
    badge.setCaller(el);
    badge.buildBadgeFromJson(dataPath, BuildType.InsideSvg);
}

function buildSvgBadgeFullJson(el: HTMLElement, dataPath: string = "./badgeData.json", stylePath: string = "./badgeStyle.json") {
    const badge = new Badge();
    badge.setSvgTarget(el);
    badge.setCaller(el);
    badge.buildBadgeFromJsons(stylePath, dataPath, BuildType.InsideSvg);
}