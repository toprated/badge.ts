class Languages {

    static all: ILanguage[] = [
        { name: "ActionScript", color: "#882B0F", textColor: Color.white },
        { name: "C",            color: "#555555", textColor: Color.white },
        { name: "C#",           color: "#178600", textColor: Color.white },
        { name: "Cpp",          color: "#f34b7d", textColor: Color.white },
        { name: "Clojure",      color: "#db5855", textColor: Color.white },
        { name: "CoffeeScript", color: "#244776", textColor: Color.white },
        { name: "Css",          color: "#563d7c", textColor: Color.white },
        { name: "Go",           color: "#375eab", textColor: Color.white },
        { name: "Haskell",      color: "#29b544", textColor: Color.white },
        { name: "Html",         color: "#e44b23", textColor: Color.white },
        { name: "Java",         color: "#b07219", textColor: Color.white },
        { name: "JavaScript",   color: "#f1e05a", textColor: Color.white },
        { name: "Lua",          color: "#000080", textColor: Color.white },
        { name: "Matlab",       color: "#bb92ac", textColor: Color.white },
        { name: "ObjC",         color: "#438eff", textColor: Color.white },
        { name: "Perl",         color: "#0298c3", textColor: Color.white },
        { name: "Php",          color: "#4F5D95", textColor: Color.white },
        { name: "Python",       color: "#3572A5", textColor: Color.white },
        { name: "R",            color: "#198ce7", textColor: Color.white },
        { name: "Ruby",         color: "#701516", textColor: Color.white },
        { name: "Scala",        color: "#DC322F", textColor: Color.white },
        { name: "Shell",        color: "#89e051", textColor: Color.white },
        { name: "Swift",        color: "#ffac45", textColor: Color.white },
        { name: "Tex",          color: "#3D6117", textColor: Color.white },
        { name: "Viml",         color: "#199f4b", textColor: Color.white },
        { name: "TypeScript",   color: "#2b7489", textColor: Color.white }
    ];



    static actionScript : ILanguage = { name: "ActionScript", color: "#882B0F", textColor: Color.white };
    static c            : ILanguage = { name: "C",            color: "#555555", textColor: Color.white };
    static cSharp       : ILanguage = { name: "C#",           color: "#178600", textColor: Color.white };
    static cpp          : ILanguage = { name: "Cpp",          color: "#f34b7d", textColor: Color.white };
    static clojure      : ILanguage = { name: "Clojure",      color: "#db5855", textColor: Color.white };
    static coffeeScript : ILanguage = { name: "CoffeeScript", color: "#244776", textColor: Color.white };
    static css          : ILanguage = { name: "Css",          color: "#563d7c", textColor: Color.white };
    static go           : ILanguage = { name: "Go",           color: "#375eab", textColor: Color.white };
    static haskell      : ILanguage = { name: "Haskell",      color: "#29b544", textColor: Color.white };
    static html         : ILanguage = { name: "Html",         color: "#e44b23", textColor: Color.white };
    static java         : ILanguage = { name: "Java",         color: "#b07219", textColor: Color.white };
    static javaScript   : ILanguage = { name: "JavaScript",   color: "#f1e05a", textColor: Color.white };
    static lua          : ILanguage = { name: "Lua",          color: "#000080", textColor: Color.white };
    static matlab       : ILanguage = { name: "Matlab",       color: "#bb92ac", textColor: Color.white };
    static objC         : ILanguage = { name: "ObjC",         color: "#438eff", textColor: Color.white };
    static perl         : ILanguage = { name: "Perl",         color: "#0298c3", textColor: Color.white };
    static php          : ILanguage = { name: "Php",          color: "#4F5D95", textColor: Color.white };
    static python       : ILanguage = { name: "Python",       color: "#3572A5", textColor: Color.white };
    static r            : ILanguage = { name: "R",            color: "#198ce7", textColor: Color.white };
    static ruby         : ILanguage = { name: "Ruby",         color: "#701516", textColor: Color.white };
    static scala        : ILanguage = { name: "Scala",        color: "#DC322F", textColor: Color.white };
    static shell        : ILanguage = { name: "Shell",        color: "#89e051", textColor: Color.white };
    static swift        : ILanguage = { name: "Swift",        color: "#ffac45", textColor: Color.white };
    static tex          : ILanguage = { name: "Tex",          color: "#3D6117", textColor: Color.white };
    static viml         : ILanguage = { name: "Viml",         color: "#199f4b", textColor: Color.white };
    static typeScript   : ILanguage = { name: "TypeScript",   color: "#2b7489", textColor: Color.white };

    static getLanguage(sectionType: SectionType): ILanguage {
        switch (sectionType) {
            case SectionType.ActionScript: return this.actionScript;
            case SectionType.C           : return this.c;
            case SectionType.CSharp      : return this.cSharp;
            case SectionType.Cpp         : return this.cpp;
            case SectionType.Clojure     : return this.clojure;
            case SectionType.CoffeeScript: return this.coffeeScript;
            case SectionType.Css         : return this.css;
            case SectionType.Go          : return this.go;
            case SectionType.Haskell     : return this.haskell;
            case SectionType.Html        : return this.html;
            case SectionType.Java        : return this.java;
            case SectionType.JavaScript  : return this.javaScript;
            case SectionType.Lua         : return this.lua;
            case SectionType.Matlab      : return this.matlab;
            case SectionType.ObjC        : return this.objC;
            case SectionType.Perl        : return this.perl;
            case SectionType.Php         : return this.php;
            case SectionType.Python      : return this.python;
            case SectionType.R           : return this.r;
            case SectionType.Ruby        : return this.ruby;
            case SectionType.Scala       : return this.scala;
            case SectionType.Shell       : return this.shell;
            case SectionType.Swift       : return this.swift;
            case SectionType.Tex         : return this.tex;
            case SectionType.TypeScript  : return this.typeScript;
            case SectionType.Viml        : return this.viml;

            case SectionType.Text        : break;

            default:
                throw Error(`Unknown SectionType, can not get corresponding Language! Type: ${sectionType}`);
        }
    }
}