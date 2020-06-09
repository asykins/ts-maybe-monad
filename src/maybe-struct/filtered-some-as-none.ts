import { IFiltered } from "./interfaces/filtered-interface";

export class FilteredSomeAsNone<T> implements IFiltered<T> {
    public Do = (action: (content: T) => void): void => { }
    
}