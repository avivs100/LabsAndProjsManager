using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace LabsAndProjsManagerServer.Models
{
    public class StudentModel
    {
        [Required]
        public string ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }


        public List<CourseModel> StudentCourses { get; set; } = new List<CourseModel>();


        public StudentModel()
        {

        }

        public StudentModel(string id, string firstName, string lastName)
        {
            ID = id;
            FirstName = firstName;
            LastName = lastName;
        }

        public void SetCoursesGrades()
        {
            foreach(var course in StudentCourses)
                course.CalcGrade();
        }
    }
}
