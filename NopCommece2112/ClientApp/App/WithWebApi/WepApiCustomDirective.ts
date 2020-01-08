import { Directive, ElementRef } from "@angular/core"

@Directive({
    selector: "[apidirective]"
})
export class Wepapicustomdirective
{
    constructor(element: ElementRef)
    {
        element.nativeElement.innerText="Gaurav kumaya"
    }

}