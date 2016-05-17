/// <reference path="./../interfaces/IBadgeSection.ts"/>

class BadgeSection implements IBadgeSection {
    textSection: string;
    bcgColor: string;

    constructor(text: string, bcgColor: string) {
        this.textSection = text;
        this.bcgColor = bcgColor;
    }
}