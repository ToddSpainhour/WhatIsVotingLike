using System;

namespace WhatIsVotingLike.Models
{
    public class TrainingModules
    {
        public int TrainingModuleId { get; set; }
        public int TraineeId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateComplete { get; set; }
        public bool IsComplete { get; set; }
        public int slidesCompleted { get; set; }
    }
}
