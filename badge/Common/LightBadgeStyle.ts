﻿/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>

class LightBadgeStyle implements BadgeStyle {
    commonTextStyle: ISectionStyle;
    indent = 3;
    radius = 3;

    constructor() {
        const commonFontStyle = new FontStyle("DejaVu Sans,Verdana,Geneva,sans-serif", 11, Color.black, Color.black);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}