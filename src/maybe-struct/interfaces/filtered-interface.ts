export interface IFiltered<T> {
    Do: (action: (content: T) => void) => void;
}