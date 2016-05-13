/// <reference path="./../enums/Color.ts"/>

namespace Colors {

    const silver = "#C0C0C0";
    const gray = "#808080";
    const white = "#FFF";
    const black = "#000";
    const gold = "#FFD700";

    export function get(color: Color): string {
        switch (color) {
        case Color.Gold:
            return gold;
        case Color.Silver:
            return silver;
        case Color.Black:
            return black;
        case Color.White:
            return white;
        case Color.Gray:
            return gray;
        default:
            return null;
        }
    }
}