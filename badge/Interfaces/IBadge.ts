interface IBadge {
    targetHtmlElement: HTMLElement;
    targetSvgElement: HTMLElement;

    buildBadge(badgeDataPath: string, buildType: BuildType): void;

    getStyle(): IBadgeStyle;

    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData, buildType: BuildType): void;
}