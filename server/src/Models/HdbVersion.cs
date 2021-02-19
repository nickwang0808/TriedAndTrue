using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbVersion
    {
        public Guid HasuraUuid { get; set; }
        public string Version { get; set; }
        public DateTime UpgradedOn { get; set; }
        public string CliState { get; set; }
        public string ConsoleState { get; set; }
    }
}
