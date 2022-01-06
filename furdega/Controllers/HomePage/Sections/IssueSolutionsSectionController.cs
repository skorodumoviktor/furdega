﻿using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.IssueSolutions;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Input;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
	[Authorize]
    [Route("api/sections/issue-solutions")]
    [ApiController]
    public class IssueSolutionsSectionController : ControllerBase
    {
        private readonly IIssueSolutionsSectionService _sectionService;

        public IssueSolutionsSectionController(IIssueSolutionsSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IssueSolutionsSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(IssueSolutionsSectionRequest section)
        {
            if (!section.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _sectionService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(IssueSolutionsSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _sectionService.UpdateSection(section);

            return Ok();
        }
    }
}
