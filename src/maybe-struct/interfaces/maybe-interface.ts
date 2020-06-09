import { IFiltered } from "./filtered-interface";

export interface IMaybe<T> {
    When: (predicate: (content: T) => boolean) => IFiltered<T>;
	Do: (action: (content: T) => void) => void;
}