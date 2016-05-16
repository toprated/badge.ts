/// <reference path="./../interfaces/IBadgeStyle.ts"/>
/// <reference path="./Colors.ts"/>

class DarkBadgeStyle implements IBadgeStyle {
    commonTextStyle: ISectionStyle;
    progLangStyle: ISectionStyle;

    constructor() {
        const commonFontStyle = new FontStyle("Verdana", 11, Colors.get(Color.White), "");
        const commonBcgColor = "";
        this.commonTextStyle = new SectionStyle(commonFontStyle, commonBcgColor);

        const langFontStyle = new FontStyle("Verdana", 11, "", "");
        const langBcgColor = "";
        this.progLangStyle = new SectionStyle(langFontStyle, langBcgColor);
    }

}