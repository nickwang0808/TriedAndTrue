using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbCronEvent
    {
        public HdbCronEvent()
        {
            HdbCronEventInvocationLogs = new HashSet<HdbCronEventInvocationLog>();
        }

        public string Id { get; set; }
        public string TriggerName { get; set; }
        public DateTime ScheduledTime { get; set; }
        public string Status { get; set; }
        public int Tries { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? NextRetryAt { get; set; }

        public virtual HdbCronTrigger TriggerNameNavigation { get; set; }
        public virtual ICollection<HdbCronEventInvocationLog> HdbCronEventInvocationLogs { get; set; }
    }
}
