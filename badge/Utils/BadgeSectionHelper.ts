/// <reference path="./../Enums/SectionPosition.ts"/>
/// <reference path="./../Interfaces/ISectionResult.ts"/>

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

    static getSection(section: IBadgeSection,
        currentSection: number, sectionsCount: number,
        badgeWidth: number, badgeHeight: number, badgeStyle: IBadgeStyle,
        caller: HTMLElement): ISectionResult {
        
        const sectionGroup = SvgTagsHelper.createG("section-group");

        const sectionPosition = BadgeSectionHelper.getSectionPosition(currentSection, sectionsCount);

        const fontStyle = badgeStyle.commonTextStyle.fontStyle;
        const sectionTextRect = SvgTagsHelper.getRectText(section.text, fontStyle, caller);
        const sectionWidth = badgeStyle.indent * 2 + sectionTextRect.width;
        const sectionHeight = badgeStyle.indent * 2 + sectionTextRect.height;

        const sectionText = SvgTagsHelper.createText(section.text);
        sectionText
            .fontFamily(fontStyle.fontFamily)
            .fontSize(fontStyle.fontSize)
            .fill(fontStyle.fontColor)
            .setX(badgeWidth + sectionWidth / 2)
            .setY(sectionHeight / 2);
        sectionText.setAttribute("text-anchor", "middle");
        sectionText.setAttribute("alignment-baseline", "central");

        const sectionTextShadow = SvgTagsHelper.createText(section.text);
        sectionTextShadow
            .fontFamily(fontStyle.fontFamily)
            .fontSize(fontStyle.fontSize)
            .fill(fontStyle.fontShadowColor)
            .fillOpacity("0.3")
            .setX(badgeWidth + sectionWidth / 2)
            .setY(sectionHeight / 2 + 1);
        sectionTextShadow.setAttribute("text-anchor", "middle");
        sectionTextShadow.setAttribute("alignment-baseline", "central");

        if (section.bcgColor === undefined) {
            section.bcgColor = badgeStyle.commonTextStyle.backgroundColor;
        }

        const sectionRect = SvgTagsHelper.createSection(sectionPosition, badgeWidth, 0, sectionWidth, sectionHeight, badgeStyle.radius, section.bcgColor);
        
        sectionGroup.appendChild(sectionRect);
        sectionGroup.appendChild(sectionTextShadow);
        sectionGroup.appendChild(sectionText);
        
        return {
            node: sectionGroup,
            rect: {
                height: sectionHeight,
                width: sectionWidth,
                x: badgeWidth,
                y: 0
            }
        };
    }

}


