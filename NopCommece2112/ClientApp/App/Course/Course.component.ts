import { Component,OnInit } from "@angular/core";
import { Course } from "../ModelClass/Class"
import { StudentServices } from "../Services/Student.Service";
import { CourseService } from "../Services/Course.Service";
import { Student } from "../ModelClass/Student";
@Component({
    selector: "Coursedir",
    templateUrl:"./Course.Component.html"

})
export class CourseComponent
{
    

    public courses: Course[] = [{ Id:1, CourseName:"gaurav" }, { Id: 2, CourseName:"ss" }];
    public courses2: any;
    public _CourseService: CourseService;
    constructor(courseService: CourseService)
    {
        alert("ss");
        this._CourseService = courseService;
    }
    
    CourseSubmit(course: Course)
    {
        alert("Insert");
        var CouseReturn = this._CourseService.CourseInsert(course);
        CouseReturn.subscribe(s =>
            console.log(s.json())
        );
        this.GetCourse();
    }
    GetCourse(): any
    {
        alert("Get List")
        var CourseList = this._CourseService.CourseList();
        CourseList.subscribe(s => {
           // console.log(s.json())
            this.courses = s.json() as Course[]
        }
        );
        //console.log(this.courses);
    }
    ngOnInit()
    {
        this.GetCourse();
    }
}