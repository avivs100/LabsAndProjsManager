

namespace LabsAndProjsManagerServer.Models
{
    public class Submission
    {
        public string TypeOfSubmission { get; set; }
        public int Score { get; set; }
        public int SubmissionNumber { get; set; }

        public Submission(string TypeOfSubmission, int Score, int SubmissionNumber)
        {
            this.TypeOfSubmission = TypeOfSubmission;
            this.Score = Score;
            this.SubmissionNumber = SubmissionNumber;
        }
    }
}
