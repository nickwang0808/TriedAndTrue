using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbQueryCollection
    {
        public string CollectionName { get; set; }
        public string CollectionDefn { get; set; }
        public string Comment { get; set; }
        public bool? IsSystemDefined { get; set; }
    }
}
