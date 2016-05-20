interface IBadge {
    targetHtmlElement: HTMLElement;

    buildBadge(badgeDataPath: string): void;

    getStyle(): IBadgeStyle;

    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData): void;
}