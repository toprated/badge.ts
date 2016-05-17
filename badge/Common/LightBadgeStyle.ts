﻿/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./BadgeStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>
/// <reference path="./../interfaces/IBadgeStyle.ts"/>

class LightBadgeStyle implements BadgeStyle {
    commonTextStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}