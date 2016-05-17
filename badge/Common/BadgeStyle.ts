﻿/// <reference path="./../interfaces/IBadgeStyle.ts"/>
/// <reference path="./Color.ts"/>
/// <reference path="./FontStyle.ts"/>
/// <reference path="./SectionStyle.ts"/>

class BadgeStyle implements IBadgeStyle {
    commonTextStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Color.black, Color.gray);
        const commonBcgColor = Color.silver;
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);
    }
}