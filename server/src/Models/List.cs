using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class List
    {
        public List()
        {
            ListItems = new HashSet<ListItem>();
        }

        public string UserId { get; set; }
        public string Name { get; set; }
        public Guid Id { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<ListItem> ListItems { get; set; }
    }
}
