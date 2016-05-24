class Languages {
    static actionScript : ILanguage = { name: "ActionScript", color: "#882B0F" };
    static c            : ILanguage = { name: "C",            color: "#555555" };
    static cSharp       : ILanguage = { name: "CSharp",       color: "#178600" };
    static cpp          : ILanguage = { name: "Cpp",          color: "#f34b7d" };
    static clojure      : ILanguage = { name: "Clojure",      color: "#db5855" };
    static coffeeScript : ILanguage = { name: "CoffeeScript", color: "#244776" };
    static css          : ILanguage = { name: "Css",          color: "#563d7c" };
    static go           : ILanguage = { name: "Go",           color: "#375eab" };
    static haskell      : ILanguage = { name: "Haskell",      color: "#29b544" };
    static html         : ILanguage = { name: "Html",         color: "#e44b23" };
    static java         : ILanguage = { name: "Java",         color: "#b07219" };
    static javaScript   : ILanguage = { name: "JavaScript",   color: "#f1e05a" };
    static lua          : ILanguage = { name: "Lua",          color: "#000080" };
    static matlab       : ILanguage = { name: "Matlab",       color: "#bb92ac" };
    static objC         : ILanguage = { name: "ObjC",         color: "#438eff" };
    static perl         : ILanguage = { name: "Perl",         color: "#0298c3" };
    static php          : ILanguage = { name: "Php",          color: "#4F5D95" };
    static python       : ILanguage = { name: "Python",       color: "#3572A5" };
    static r            : ILanguage = { name: "R",            color: "#198ce7" };
    static ruby         : ILanguage = { name: "Ruby",         color: "#701516" };
    static scala        : ILanguage = { name: "Scala",        color: "#DC322F" };
    static shell        : ILanguage = { name: "Shell",        color: "#89e051" };
    static swift        : ILanguage = { name: "Swift",        color: "#ffac45" };
    static tex          : ILanguage = { name: "Tex",          color: "#3D6117" };
    static viml         : ILanguage = { name: "Viml",         color: "#199f4b" };
    static typeScript   : ILanguage = { name: "TypeScript",   color: "#2b7489" };

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
                throw Error("Unknown SectionType, can not get corresponding Language!");
        }
    }
}