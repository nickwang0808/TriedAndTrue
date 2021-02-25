using System;
using System.Collections.Generic;

namespace server.Models
{
    public class OverWriteIngredientsInput
    {
        public OverWriteIngredientsArgs input { get; set; }
    }

    public class OverWriteIngredientsArgs
    {
        public ICollection<string> ingredientsStrings { get; set; }
        public string recipe_id { get; set; }
    }
}