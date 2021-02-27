using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbFunctionInfoAgg
    {
        public string FunctionName { get; set; }
        public string FunctionSchema { get; set; }
        public string FunctionInfo { get; set; }
    }
}
