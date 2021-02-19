using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class User
    {
        public User()
        {
            Lists = new HashSet<List>();
            Planners = new HashSet<Planner>();
            Recipes = new HashSet<Recipe>();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Img { get; set; }

        public virtual ICollection<List> Lists { get; set; }
        public virtual ICollection<Planner> Planners { get; set; }
        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
