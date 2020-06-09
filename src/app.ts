import { IMaybe } from "./maybe-struct/interfaces/maybe-interface";
import { Maybe } from "./maybe-struct/maybe";

export class App 
{
    constructor(){
        this.Start();
    }

    private Start = (): void => {
        let maybeStr: IMaybe<string> = Maybe.Some("42 is the solution");
        maybeStr.When(x => x.includes("42"))
            .Do(x => console.log(x));
            
        maybeStr = Maybe.None();
        maybeStr.Do(x => console.log(`Should not be printed ${x}`));
    }
}

new App();