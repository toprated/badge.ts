class Languages {

    static all: ILanguage[] = [
        { name: "ActionScript", color: "#882B0F", textColor: Color.white, sectionType: SectionType.ActionScript},
        { name: "C",            color: "#555555", textColor: Color.white, sectionType: SectionType.C           },
        { name: "C#",           color: "#178600", textColor: Color.white, sectionType: SectionType.CSharp      },
        { name: "Cpp",          color: "#f34b7d", textColor: Color.white, sectionType: SectionType.Cpp         },
        { name: "Clojure",      color: "#db5855", textColor: Color.white, sectionType: SectionType.Clojure     },
        { name: "CoffeeScript", color: "#244776", textColor: Color.white, sectionType: SectionType.CoffeeScript},
        { name: "Css",          color: "#563d7c", textColor: Color.white, sectionType: SectionType.Css         },
        { name: "Go",           color: "#375eab", textColor: Color.white, sectionType: SectionType.Go          },
        { name: "Haskell",      color: "#29b544", textColor: Color.white, sectionType: SectionType.Haskell     },
        { name: "Html",         color: "#e44b23", textColor: Color.white, sectionType: SectionType.Html        },
        { name: "Java",         color: "#b07219", textColor: Color.white, sectionType: SectionType.Java        },
        { name: "JavaScript",   color: "#f1e05a", textColor: Color.white, sectionType: SectionType.JavaScript  },
        { name: "Lua",          color: "#000080", textColor: Color.white, sectionType: SectionType.Lua         },
        { name: "Matlab",       color: "#bb92ac", textColor: Color.white, sectionType: SectionType.Matlab      },
        { name: "ObjC",         color: "#438eff", textColor: Color.white, sectionType: SectionType.ObjC        },
        { name: "Perl",         color: "#0298c3", textColor: Color.white, sectionType: SectionType.Perl        },
        { name: "Php",          color: "#4F5D95", textColor: Color.white, sectionType: SectionType.Php         },
        { name: "Python",       color: "#3572A5", textColor: Color.white, sectionType: SectionType.Python      },
        { name: "R",            color: "#198ce7", textColor: Color.white, sectionType: SectionType.R           },
        { name: "Ruby",         color: "#701516", textColor: Color.white, sectionType: SectionType.Ruby        },
        { name: "Scala",        color: "#DC322F", textColor: Color.white, sectionType: SectionType.Scala       },
        { name: "Shell",        color: "#89e051", textColor: Color.white, sectionType: SectionType.Shell       },
        { name: "Swift",        color: "#ffac45", textColor: Color.white, sectionType: SectionType.Swift       },
        { name: "Tex",          color: "#3D6117", textColor: Color.white, sectionType: SectionType.Tex         },
        { name: "Viml",         color: "#199f4b", textColor: Color.white, sectionType: SectionType.TypeScript  },
        { name: "TypeScript",   color: "#2b7489", textColor: Color.white, sectionType: SectionType.Viml        }
    ];

    static getLangByName(langName: string): ILanguage {
        return this.all.find(l => l.name === langName);
    }

    static getLangByType(sectionType: SectionType): ILanguage {
        return this.all.find(l => l.sectionType === sectionType);
    }
}