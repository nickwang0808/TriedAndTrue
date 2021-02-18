using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class Planner
    {
        public string UserId { get; set; }
        public string RecipeId { get; set; }
        public DateTime Date { get; set; }
        public int Index { get; set; }

        public virtual Recipe Recipe { get; set; }
        public virtual User User { get; set; }
    }
}
