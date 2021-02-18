using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class ListItem
    {
        public string Name { get; set; }
        public double? Quantity { get; set; }
        public string Comment { get; set; }
        public string Other { get; set; }
        public string Category { get; set; }
        public bool IsCompleted { get; set; }
        public Guid Id { get; set; }
        public Guid List { get; set; }
        public string Unit { get; set; }
        public string Recipes { get; set; }

        public virtual List ListNavigation { get; set; }
    }
}
