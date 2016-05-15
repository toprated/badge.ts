﻿interface IBadge {
    targetElement: HTMLElement;

    buildBadge(badgeData: IBadgeData): void;

    getStyle(): IBadgeStyle;
}