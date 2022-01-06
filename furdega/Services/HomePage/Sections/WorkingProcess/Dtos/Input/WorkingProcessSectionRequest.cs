﻿namespace Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input
{
    public class WorkingProcessSectionRequest: HomeSectionModelBase
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }
    }
}