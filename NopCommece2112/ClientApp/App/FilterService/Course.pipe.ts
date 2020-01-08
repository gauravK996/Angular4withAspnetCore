import { Pipe, PipeTransform } from "@angular/core";
import { CourseService } from "../Services/Course.Service";
import { Course } from '../ModelClass/Class';
@Pipe({
    name: "Coursefilter"
})


export class CoursefilterPipe implements PipeTransform {
    _courseService: CourseService;
    _CourseList: Course[];
    constructor(courseService: CourseService)
    {
        this._courseService = courseService;
        //this._CourseList = this._courseService.CourseList();
        this.CourseLis();
    }
    transform(Id: number): string
    {
        var Ob= this._CourseList.find(function (element)
        {
            return element.Id == Id;
        })
        return Ob.CourseName;
    }

    CourseLis()
    {
        var list = this._courseService.CourseList();
        list.subscribe(s =>
        {
            this._CourseList = s.json() as Course[];
            })
    }
   
}