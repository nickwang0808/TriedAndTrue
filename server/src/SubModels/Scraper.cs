using System.Collections.Generic;

namespace server.Models
{
    public class ScraperInput
    {
        public ImportRecipeArgs input { get; set; }
    }

    public class ImportRecipeArgs
    {
        public string url { get; set; }
    }

}