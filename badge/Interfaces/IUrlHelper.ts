/// <reference path="./../enums/Theme.ts"/>

interface IUrlHelper {
    getParameter(parameterName: string): string;
    getTheme(): Theme;
}