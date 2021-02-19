using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class RecipeIngredient
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Unit { get; set; }
        public string Comment { get; set; }
        public string RecipeId { get; set; }
        public string RawText { get; set; }
        public string FormattedText { get; set; }
        public string Other { get; set; }
        public int Index { get; set; }
        public string Quantity { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
