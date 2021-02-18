using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class Recipe
    {
        public Recipe()
        {
            Planners = new HashSet<Planner>();
            RecipeIngredients = new HashSet<RecipeIngredient>();
        }

        public string Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public int? TotalTime { get; set; }
        public string Yields { get; set; }
        public string Owner { get; set; }
        public string Cuisine { get; set; }
        public string Directions { get; set; }
        public string MealType { get; set; }
        public DateTime CreatedAt { get; set; }

        public virtual User OwnerNavigation { get; set; }
        public virtual ICollection<Planner> Planners { get; set; }
        public virtual ICollection<RecipeIngredient> RecipeIngredients { get; set; }
    }
}
