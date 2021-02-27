using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace server.Models
{
    public class InsertRecipeArgs
    {
        public string title { set; get; }
        public string img { set; get; }
        public int total_time { set; get; }
        public string yields { set; get; }
        public string cuisine { set; get; }
        public string meal_type { set; get; }
        public ICollection<string> ingredients { set; get; }
        [Column(TypeName = "jsonb")]
        public string directions { set; get; }
    }

    public class InsertRecipeInput
    {
        public InsertRecipeArgs input { set; get; }
    }

}
