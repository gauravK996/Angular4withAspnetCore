import { Component,OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from 'rxjs/Rx'
import 'rxjs/Rx'
@Component({
    selector: "ReactiveForm",
    templateUrl:"./Reactiveform.Component.html"
})
export class ReactiveConmpnent
{
    //public data: Observable<Array<number>>;
    public Numbers: Array<number> = [1,12,21,12,11];

    init() {
        //this.data = new Observable(observer =>
        //{
        //    setTimeout(() => {

        //        observer.next(42)
        //    }, 1000);

        //}
        //var vv = Observable.of(this.Numbers)  
        //let Sub = vv.subscribe(
        //    value => this.Numbers.push(10),
        //    error => console.log("sss"),
        //    () => console.log("21")
        //   );
            
    }

    name = new FormControl('');
    MyForm = new FormGroup(
        {
            FirstName: new FormControl('gaurav', Validators.required),
            LastName: new FormControl('Kumaya',Validators.required),
            Address: new FormGroup({
                State: new FormControl('Delhi', Validators.required),
                City: new FormControl('Delhi', Validators.required)
            })
        })
    get FirstName(): any { return this.MyForm.get("FirstName") }
    get LastName(): any { return this.MyForm.get("LastName") }
    get State(): any { return this.MyForm.get("Address").get("State") }
    get City(): any { return this.MyForm.get("Address").get("City") }
    OnClick()
    {
        this.name.setValue("sanju")
        this.MyForm.patchValue({ FirstName: "Sanjay" })
        //this.MyForm.setValue({ FirstName:"Sanjay"})
        //this.name.value
    }
    OnSubmitClick()
    {
        console.log(this.MyForm.value);
        this.MyForm.reset();
    }
    onKeyEnter()
    {
        alert("Game");
    }
    ngOnInit()
    {
        var vv = Observable.from(this.Numbers)
        let Sub = vv.subscribe(
            value => this.Numbers.push(10),
            error => console.log("sss"),
            () => console.log(this.Numbers)
        );
    }

}