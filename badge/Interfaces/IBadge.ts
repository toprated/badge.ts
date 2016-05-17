interface IBadge {
    targetElement: HTMLElement;

    buildBadge(badgeStyle: IBadgeStyle, badgeDataPath: string): void;

    getStyle(): IBadgeStyle;
}