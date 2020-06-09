import { FilteredSome } from "./filtered-some";
import { FilteredSomeAsNone } from "./filtered-some-as-none";
import { IFiltered } from "./interfaces/filtered-interface";
import { IMaybe } from "./interfaces/maybe-interface";

export class Maybe<T> implements IMaybe<T> {
    constructor(private content: Array<T>) { }

    public static Some = (content: any): IMaybe<any> =>
        new Maybe<any>([content]);

    public static None = (): IMaybe<any> =>
        new Maybe<any>([]);

    public Do = (action: (content: T) => void) : void  => {
        this.content.forEach(x => action(x));
    }

    public When = (predicate: (content: T) => boolean): IFiltered<T> => {
        return this.content
            .find(predicate) === undefined
            ? new FilteredSomeAsNone<T>()
            : new FilteredSome<T>(this.content);
    }
    
}