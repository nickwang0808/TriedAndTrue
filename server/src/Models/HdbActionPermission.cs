using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbActionPermission
    {
        public string ActionName { get; set; }
        public string RoleName { get; set; }
        public string Definition { get; set; }
        public string Comment { get; set; }

        public virtual HdbAction ActionNameNavigation { get; set; }
    }
}
