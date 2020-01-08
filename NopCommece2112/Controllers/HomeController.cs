using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using Newtonsoft.Json;
using NopCommece2112.Model;
using NopCommece2112.Services;

namespace NopCommece2112.Controllers
{
    public class HomeController:Controller
    {
        private readonly IRepostary<Student> _repostary;
        private readonly IRepostary<Course> _repostaryCourse;
        public HomeController(IRepostary<Student> repostary,IRepostary<Course> repostaryCourse)
        {
            _repostary = repostary;
            this._repostaryCourse = repostaryCourse;
        }
        public IActionResult Index()
        {
            var v=_repostary.Table.ToList();
            return View();
        }

        public IActionResult StudentList()
        {
            var StudeList = _repostary.Table.ToList();

            var jsonserilize = new JsonSerializerSettings()
            {
                DateFormatHandling = DateFormatHandling.IsoDateFormat
            };
            return Json(StudeList,jsonserilize);
        }
        [HttpPost]
        public IActionResult Insert([FromBody]Student student)
        {
            _repostary.Insert(student);
            return Json("okk");
        }

        public IActionResult CourseAdd([FromBody]Course course)
        {
            if (course == null)
                throw new ArgumentNullException(nameof(Course));
            _repostaryCourse.Insert(course);
            return Json("Ok");
        }
        public IActionResult CourseList()
        {
            var ListCourse = (from s in _repostaryCourse.Table select new { s.Id,s.CourseName} ).ToList();
            var jsonserilize = new JsonSerializerSettings()
            {
                DateFormatHandling = DateFormatHandling.IsoDateFormat
            };
            return Json(ListCourse,jsonserilize);
        }

        public IActionResult Getmydata()
        {
            List<StudentModel> studentModels = new List<StudentModel>();
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("http://localhost:59857/api/");
                var responsetask = httpClient.GetAsync("Home/getStudentList/{id}/{name}");
                responsetask.Wait();
                var result = responsetask.Result;
                if (result.IsSuccessStatusCode)
                {
                    var readtask = result.Content.ReadAsAsync<StudentModel[]>();
                    readtask.Wait();

                    studentModels.AddRange(readtask.Result);
                }
            }
            JsonSerializerSettings jsonSerializer = new JsonSerializerSettings()
            {
                DateFormatHandling = DateFormatHandling.IsoDateFormat
            };
            
                return Json(studentModels,jsonSerializer);
        }
        public IActionResult PostData([FromBody]StudentModel studentModel)
        {
            StudentModel model =new StudentModel();
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.BaseAddress = new Uri("http://localhost:59857/api/");
               var request= httpClient.PostAsJsonAsync("Home", studentModel);
                request.Wait();
                var Response = request.Result;
                if(Response.IsSuccessStatusCode)
                {
                    var returnDataMapping = Response.Content.ReadAsAsync<StudentModel>();
                    returnDataMapping.Wait();
                    model = returnDataMapping.Result;
                }


            }


            JsonSerializerSettings jsonSerializer = new JsonSerializerSettings()
            {
                    DateFormatHandling = DateFormatHandling.IsoDateFormat
            };
            return Json("jsooosnasas", jsonSerializer);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
