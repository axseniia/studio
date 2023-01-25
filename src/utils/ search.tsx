import { MutableRefObject } from "react";

export class PrefixTree {
    head: {};
    constructor (data: [Record<string, any>]) {
        for(let i = 0; i < data.length; i++) {
            this.fillTree(this.head, data[i], data[i].name);
        }        
    };
    search (query: string): Object {
        return {};
    };
    fillTree<T>(root: Record<string, any>, data: T, string : string) : void {
        let lettersArray = string.split('');
        if (lettersArray.length === 1) {
            root[lettersArray[0]] = {
                type: 'end',
                data: data
            };
            return;
        }
        root[lettersArray[0]] = {
            ...root[lettersArray[0]],
            type: 'node',
            [lettersArray[1]] : {}
        }

        this.fillTree(root[lettersArray[0]], data, lettersArray.slice(1).join(''));
    }
}