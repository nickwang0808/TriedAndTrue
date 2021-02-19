using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbCronTrigger
    {
        public HdbCronTrigger()
        {
            HdbCronEvents = new HashSet<HdbCronEvent>();
        }

        public string Name { get; set; }
        public string WebhookConf { get; set; }
        public string CronSchedule { get; set; }
        public string Payload { get; set; }
        public string RetryConf { get; set; }
        public string HeaderConf { get; set; }
        public bool IncludeInMetadata { get; set; }
        public string Comment { get; set; }

        public virtual ICollection<HdbCronEvent> HdbCronEvents { get; set; }
    }
}
