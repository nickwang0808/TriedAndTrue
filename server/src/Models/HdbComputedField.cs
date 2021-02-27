using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbComputedField
    {
        public string TableSchema { get; set; }
        public string TableName { get; set; }
        public string ComputedFieldName { get; set; }
        public string Definition { get; set; }
        public string Comment { get; set; }
    }
}
