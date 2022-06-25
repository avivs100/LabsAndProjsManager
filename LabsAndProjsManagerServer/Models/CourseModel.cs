
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace LabsAndProjsManagerServer.Models
{
    public class CourseModel
    {
        [Required]
        public int ID { get; set; }
        public string Name { get; set; }
        public double Grade { get; set; } = 0;

        public List<Submission> Labs { get; set; } = new List<Submission>();
        public List<Submission> Projects { get; set; } = new List<Submission>();

        public CourseModel(){ }

        public CourseModel(int id, string name)
        {
            ID = id;
            Name = name;
        }

        public void CalcGrade()
        {
            var sum = 0;
            var numberOffSubmissions = 0;
            var sumLab = 0;
            for (var i = 0; i < Labs.Count; i++)
            {
                sumLab += Labs[i].Score;
                numberOffSubmissions++;
            }
            var sumProject = 0;
            for (var i = 0; i < Projects.Count; i++)
            {
                sumProject += Projects[i].Score;
                numberOffSubmissions++;
            }

            sum += (sumLab + sumProject);
            if (numberOffSubmissions != 0 ) 
                sum /= numberOffSubmissions;
            Grade = sum;
        }
    }
}
