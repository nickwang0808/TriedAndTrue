using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbAllowlist
    {
        public string CollectionName { get; set; }

        public virtual HdbQueryCollection CollectionNameNavigation { get; set; }
    }
}
