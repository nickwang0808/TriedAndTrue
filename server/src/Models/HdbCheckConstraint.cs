using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbCheckConstraint
    {
        public string TableSchema { get; set; }
        public string TableName { get; set; }
        public string ConstraintName { get; set; }
        public string Check { get; set; }
    }
}
