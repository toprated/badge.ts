/// <reference path="./../interfaces/IFontStyle.ts"/>

class FontStyle implements IFontStyle{
    fontFamily: string;
    fontSize: number;
    fontColor: string;
    fontShadowColor: string;

    constructor(fFamily: string, fSize: number, fColor: string, fShadowColor: string) {
        this.fontFamily = fFamily;
        this.fontSize = fSize;
        this.fontColor = fColor;
        this.fontShadowColor = fShadowColor;
    }
}