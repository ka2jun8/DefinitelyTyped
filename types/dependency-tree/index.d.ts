// Type definitions for dependency-tree 8.0
// Project: https://github.com/mrjoelkemp/node-dependency-tree
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Alex <https://github.com/adjerbetian>
//                 Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dependencyTree {
    interface DependencyObj {
        [k: string]: DependencyObj;
    }

    interface Options {
        filename: string;
        directory?: string;
        requireConfig?: string;
        webpackConfig?: string;
        tsConfig?: string | Record<string, any>;
        nodeModulesConfig?: any;
        detective?: any;
        visited?: DependencyObj;
        filter?(path: string): boolean;
        nonExistent?: string[];
        isListForm?: boolean;
    }

    function toList(options: Options): string[];
}

declare function dependencyTree(options: dependencyTree.Options): dependencyTree.DependencyObj;

export = dependencyTree;
