using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbFunctionAgg
    {
        public string FunctionName { get; set; }
        public string FunctionSchema { get; set; }
        public string Description { get; set; }
        public bool? HasVariadic { get; set; }
        public string FunctionType { get; set; }
        public string FunctionDefinition { get; set; }
        public string ReturnTypeSchema { get; set; }
        public string ReturnTypeName { get; set; }
        public string ReturnTypeType { get; set; }
        public bool? ReturnsSet { get; set; }
        public string InputArgTypes { get; set; }
        public string InputArgNames { get; set; }
        public short? DefaultArgs { get; set; }
        public int? FunctionOid { get; set; }
    }
}
