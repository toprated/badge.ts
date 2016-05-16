/// <reference path="./../interfaces/IBadgeStyle.ts"/>
/// <reference path="./Color.ts"/>

class DarkBadgeStyle implements IBadgeStyle {
    commonTextStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }

}