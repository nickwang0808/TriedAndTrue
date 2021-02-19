using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class EventTrigger
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string SchemaName { get; set; }
        public string TableName { get; set; }
        public string Configuration { get; set; }
        public string Comment { get; set; }
    }
}
