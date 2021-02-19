using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbAction
    {
        public HdbAction()
        {
            HdbActionPermissions = new HashSet<HdbActionPermission>();
        }

        public string ActionName { get; set; }
        public string ActionDefn { get; set; }
        public string Comment { get; set; }
        public bool? IsSystemDefined { get; set; }

        public virtual ICollection<HdbActionPermission> HdbActionPermissions { get; set; }
    }
}
