import { Pipe, PipeTransform, Class } from "@angular/core"
@Pipe({
    name: "APINAME"
})
export class ApiFilter implements PipeTransform {
    transform(value: string) {
        //throw new Error("Method not implemented.");
        return value + value.length;
    }
 

}