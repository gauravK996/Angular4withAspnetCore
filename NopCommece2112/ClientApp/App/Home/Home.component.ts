import { Component,OnInit } from "@angular/core";
import { Student } from "../ModelClass/Student";
import { CourseService } from "../Services/Course.Service"
import { Course } from "../ModelClass/Class";
import { StudentServices } from "../Services/Student.Service"
@Component({
    selector: "Home",
    templateUrl: "./Home.component.html",
    styleUrls:["./Home.component.css"]
})
export class HomeComponent {
    public Students: Student[];
    public StudentData: Student;
    public Courses: Course[];
    public _CourseService: CourseService;
    public _StudenService: StudentServices;
    constructor(courseService: CourseService, studenService: StudentServices) {
        this._CourseService = courseService;
        this._StudenService = studenService;
    }

    OnFirstRun()
    {
        alert("Sanju")
        var CourseList = this._CourseService.CourseList();
        CourseList.subscribe(s => {
            this.Courses = s.json() as Course[]; 
        });

        var Studentlist = this._StudenService.StudentList();
        Studentlist.subscribe(Result => {
            this.Students = Result.json() as Student[];
        })
        //this.Students = [{ Id: "1", Name: "sanju" }, { Id: "2", Name: "Gaurav" }, { Id: "3", Name:"ssss" }]
    }

    OnUserClick(std: Student)
    {
        //this.StudentData = { Id: std.Id, Name: std.Name };

    }
    Submit(Obj)
    {
        var vv = this._StudenService.StudentInsert(Obj);
        vv.subscribe(s =>
        {
            console.log(s.json());
        })
        console.log(Obj);
        this.OnFirstRun();
    }
    ngOnInit()
    {
        this.OnFirstRun();
    }
}