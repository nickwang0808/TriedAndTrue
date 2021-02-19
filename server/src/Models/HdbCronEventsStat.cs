using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbCronEventsStat
    {
        public string Name { get; set; }
        public long? UpcomingEventsCount { get; set; }
        public DateTime? MaxScheduledTime { get; set; }
    }
}
