/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>

class DarkBadgeStyle implements BadgeStyle {
    commonTextStyle: ISectionStyle;
    indent = 5;
    radius = 3;
    
    constructor() {
        const commonFontStyle = new FontStyle("DejaVu Sans,Verdana,Geneva,sans-serif", 11, Color.white, Color.black);
        const commonBcgColor = Color.darkGrey;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }

}