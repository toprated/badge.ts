/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>
/// <reference path="./../interfaces/IBadgeStyle.ts"/>

class DarkBadgeStyle implements BadgeStyle {
    commonTextStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }

}