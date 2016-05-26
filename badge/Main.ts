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

function myLanguageBadge(el: HTMLElement) {

    const badge = new Badge();
    const user = badge.urlHelper.getUserName();
    const repo = badge.urlHelper.getRepoName();

    const reqUrl = `https://api.github.com/repos/${user}/${repo}`;

    var lang: string;

    const req = new XMLHttpRequest();
    req.open("get", reqUrl, true);
    req.send();
    req.onreadystatechange = () => {
        if (req.readyState !== 4) return;
        if (req.status !== 200) {
            console.log(`Error while loading .json data! Request status: ${req.status} : ${req.statusText}`);
        } else {
            lang = JSON.parse(req.responseText)["language"];
            
            const sectionType = SectionType.CSharp;

            badge.setSvgTarget(el);
            badge.setCaller(el);
            const data: IBadgeData = {
                sections: [
                    {
                        type: SectionType.Text,
                        text: "language",
                        bcgColor: undefined
                    },
                    {
                        type: sectionType,
                        text: undefined,
                        bcgColor: undefined
                    }
                ]
            };
            badge.buildBadgeByData(data, BuildType.InsideSvg);
        }
    }
}

function languageBadge(el: HTMLElement, langName: string) {

    const badge = new Badge();
    badge.setSvgTarget(el);
    badge.setCaller(el);

    const lang = Languages.getLangByName(langName);
    const langSectionType = lang.sectionType;

    const data: IBadgeData = {
        sections: [
            {
                type: SectionType.Text,
                text: "language",
                bcgColor: undefined
            },
            {
                type: langSectionType,
                text: undefined,
                bcgColor: undefined
            }
        ]
    };
    badge.buildBadgeByData(data, BuildType.InsideSvg);
}