/// <reference path="./../interfaces/ISectionStyle.ts"/>

class SectionStyle implements ISectionStyle {
    fontStyle: IFontStyle;
    backgroundColor: string;

    constructor(fStyle: IFontStyle, bcgColor: string) {
        this.fontStyle = fStyle;
        this.backgroundColor = bcgColor;
    }
}