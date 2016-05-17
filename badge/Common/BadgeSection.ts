/// <reference path="./../interfaces/IBadgeSection.ts"/>

class BadgeSection implements IBadgeSection {
    text: string;
    bcgColor: string;

    constructor(text: string, bcgColor: string) {
        this.text = text;
        this.bcgColor = bcgColor;
    }
}