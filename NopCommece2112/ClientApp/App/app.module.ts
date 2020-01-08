import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home/Home.component"
import { FormsModule } from "@angular/forms";
import { CourseService } from "../App/Services/Course.Service";
import { StudentServices } from "../App/Services/Student.Service";
import { CourseComponent } from "../App/Course/Course.component"
import { RouterModule, Route } from "@angular/router";
import { HttpModule } from "@angular/http";
import { RoutingUser } from "../App/RoutingUser/RoutingUser.Component";
import { CoursefilterPipe } from "../App/FilterService/Course.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveConmpnent } from "../App/ReactiveForms/Reactiveform.Component";
import { CustomDiective } from "../App/CustomDirective/Custom.Directive";
import { ServiceForApi } from "../App/WithWebApi/ServiceForApi";
import { WithApicomponent } from "../App/WithWebApi/WithApi.component"
import { ApiFilter } from '../App/WithWebApi/WepApiFiter';
import { Wepapicustomdirective} from "../App/WithWebApi/WepApiCustomDirective"
@NgModule({
    imports: [CommonModule, BrowserModule, FormsModule, HttpModule, ReactiveFormsModule,
        RouterModule.forRoot([{ path: '', redirectTo: 'Home', pathMatch: 'full' }
            , { path: "Home", component:HomeComponent }
            , { path: "Course", component: CourseComponent }
            , { path: "ReactiveForms", component: ReactiveConmpnent }
            , { path: "Webapi", component: WithApicomponent }
        ], { useHash:true })

    ],
    declarations: [AppComponent, HomeComponent, CourseComponent, RoutingUser, CoursefilterPipe,
        ReactiveConmpnent, CustomDiective, WithApicomponent, ApiFilter, Wepapicustomdirective],
    bootstrap: [AppComponent],
    providers: [{ provide: "BaseUrl", useFactory: GetbaseUrl }, StudentServices, CourseService, ServiceForApi]
})

export class AppModule { }


export function GetbaseUrl()
{
    return document.getElementsByTagName('base')[0].href;
}