﻿using System.Linq;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Furnitures.Dtos.Input
{
    public class FurnitureRequest: IRequestWithImage
    {
        public Image BeforeImage { get; set; }
        public Image AfterImage { get; set; }
        public int FurnitureTypeId { get; set; }
        public int MaterialTypeId { get; set; }
        public bool IsFilesExtensionCorrect()
        {
            var images = AllImages.Where(s => !string.IsNullOrEmpty(s?.Base64ImageString));

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => AllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString));

        private Image[] AllImages => new[]
        {
            BeforeImage,
            AfterImage
        };
    }
}