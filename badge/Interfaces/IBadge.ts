interface IBadge {
    targetElement: HTMLElement;

    buildBadge(badgeDataPath: string): void;

    getStyle(): IBadgeStyle;

    buildSvg(badgeStyle: IBadgeStyle, badgeData: IBadgeData): void;
}