using Microsoft.AspNetCore.SignalR;
using LabsAndProjsManagerServer.DbAccess;
using LabsAndProjsManagerServer.Models;

namespace LabsAndProjsManagerServer.Api
{
    public class Api : Hub
    {
        private static DatabaseController dbController;
        public StudentModel Login(string id)
        {
            dbController = new DatabaseController();
            if (!dbController.IsConnected)
                throw new HubException("Cannot connect to DB");
            var student = dbController.Login(id);
            if (student != null)
            {
                student.StudentCourses = dbController.GetStudentCourses(student);
                student.SetCoursesGrades();
            }
            return student;
        }    

        public StudentModel Register(string id, string firstName, string lastName)
        {
            return dbController.Register(id, firstName, lastName);
        }     
    }
}
