/// <reference path="./../Enums/SectionPosition.ts"/>

class BadgeSectionHelper {

    static getSectionPosition(currentSectionNumber: number, badgeSectionsCount: number): SectionPosition {
        if (currentSectionNumber === 1) {
            return SectionPosition.Left;
        } else if (currentSectionNumber >= 1 && currentSectionNumber < badgeSectionsCount) {
            return SectionPosition.Middle;
        } else if (currentSectionNumber === badgeSectionsCount) {
            return SectionPosition.Right;
        }
        throw Error(`Can not get SectionType for section ${currentSectionNumber} of total ${badgeSectionsCount} sections.`);
    }
    
}


