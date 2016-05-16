/// <reference path="./../interfaces/IBadgeStyle.ts"/>

class LightBadgeStyle implements IBadgeStyle {
    commonTextStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}