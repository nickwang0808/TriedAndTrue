using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbForeignKeyConstraint
    {
        public string TableSchema { get; set; }
        public string TableName { get; set; }
        public string ConstraintName { get; set; }
        public int? ConstraintOid { get; set; }
        public string RefTableTableSchema { get; set; }
        public string RefTable { get; set; }
        public string ColumnMapping { get; set; }
        public string OnUpdate { get; set; }
        public string OnDelete { get; set; }
        public string Columns { get; set; }
        public string RefColumns { get; set; }
    }
}
