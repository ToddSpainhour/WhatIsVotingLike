using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WhatIsVotingLike.Data;
using WhatIsVotingLike.Models;

namespace WhatIsVotingLike.Controllers
{
    [Route("api/trainingModules")]
    [ApiController]
    public class TrainingModulesController : ControllerBase
    {
        TrainingModuleRepository _repo;

        public TrainingModulesController(TrainingModuleRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllTrainingModules()
        {
            var AllTrainingModules = _repo.GetAll();

            return Ok(AllTrainingModules);
        }
        
    }
}
