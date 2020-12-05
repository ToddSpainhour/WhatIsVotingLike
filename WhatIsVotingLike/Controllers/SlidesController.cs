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
    [Route("api/slides")]
    [ApiController]
    public class SlidesController : ControllerBase
    {

        SlideRepository _repo;


        public SlidesController(SlideRepository repo)
        {
            _repo = repo;
        }


        [HttpGet("{trainingModuleId}")]
        public IActionResult GetAllSlidesByTrainingModuleId(int trainingModuleId)
        {
            var SlidesFromTrainingModule = _repo.GetAllSlidesForModule(trainingModuleId);

            return Ok(SlidesFromTrainingModule);
        }


        [HttpGet]
        public IActionResult GetAllSlides()
        {
            var AllSlides = _repo.GetAll();

            return Ok(AllSlides);
        }
    }
}
