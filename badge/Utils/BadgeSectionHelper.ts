/// <reference path="./../Enums/SectionType.ts"/>

class BadgeSectionHelper {

    static getSectionType(currentSectionNumber: number, badgeSectionsCount: number): SectionType {
        if (currentSectionNumber === 1) {
            return SectionType.Left;
        } else if (currentSectionNumber >= 1 && currentSectionNumber < badgeSectionsCount) {
            return SectionType.Middle;
        } else if (currentSectionNumber === badgeSectionsCount) {
            return SectionType.Right;
        }
        throw Error(`Can not get SectionType for section ${currentSectionNumber} of total ${badgeSectionsCount} sections.`);
    }
    
}


