interface IBadge {
    caller: HTMLElement;
    targetHtmlElement: HTMLElement;
    targetSvgElement: HTMLElement;
    style: IBadgeStyle;
    theme: Theme;
    urlHelper: IUrlHelper;

    buildBadgeFromJson(badgeDataPath: string, buildType: BuildType): void;
    buildBadgeFromJsons(badgeStylePath: string, badgeDataPath: string, buildType: BuildType): void;

    getStyle(): IBadgeStyle;

    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData, buildType: BuildType): void;
}