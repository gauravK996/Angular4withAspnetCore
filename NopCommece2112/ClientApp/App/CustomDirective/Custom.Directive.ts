import { Directive,ElementRef } from "@angular/core";
@Directive({
    selector: "[dddss]"
})
export class CustomDiective
{
    constructor(element: ElementRef)
    {
        console.log(element);
        element.nativeElement.innerText="sanjsanjsuasjshasd"
    }

}