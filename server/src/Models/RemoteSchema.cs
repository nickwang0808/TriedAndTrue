using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class RemoteSchema
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Definition { get; set; }
        public string Comment { get; set; }
    }
}
