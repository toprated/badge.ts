/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>

class DarkBadgeStyle implements BadgeStyle {
    commonTextStyle: ISectionStyle;
    indent = 3;
    radius = 3;
    
    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.white, Color.gray);
        const commonBcgColor = Color.black;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }

}