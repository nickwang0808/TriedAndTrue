using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbFunction
    {
        public string FunctionSchema { get; set; }
        public string FunctionName { get; set; }
        public string Configuration { get; set; }
        public bool? IsSystemDefined { get; set; }
    }
}
