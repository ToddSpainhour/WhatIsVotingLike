using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WhatIsVotingLike.Models
{
    public class Slides
    {
        public int TrainingModuleId { get; set; }
        public int SlideId { get; set; }
        public int SlideOrderPosition { get; set; }
        public string SlideTitle { get; set; }
        public string SlideBodyText { get; set; }
        public string ImageUrl { get; set; }
        public string Question { get; set; }
        public string CorrectAnswer { get; set; }
        public string IncorrectAnswer1 { get; set; }
        public string IncorrectAnswer2 { get; set; }
        public string IncorrectAnswer3 { get; set; }
        public bool IsComplete { get; set; }
    }
}
