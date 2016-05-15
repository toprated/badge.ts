/// <reference path="./../interfaces/IBadgeStyle.ts"/>

class BadgeStyle implements IBadgeStyle{

    constructor(theme: Theme) {
        this.targetElement = element;
    }

    sectionsStyles: ISectionStyle[];
}