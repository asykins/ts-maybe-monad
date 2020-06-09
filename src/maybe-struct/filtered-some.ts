import { IFiltered } from "./interfaces/filtered-interface";

export class FilteredSome<T> implements IFiltered<T> {
    constructor(private content: Array<T>) { }
    
    public Do = (action: (content: T) => void): void => {
        this.content.forEach(x => action(x));
    }
}