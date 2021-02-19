using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class SchemaMigration
    {
        public long Version { get; set; }
        public bool Dirty { get; set; }
    }
}
