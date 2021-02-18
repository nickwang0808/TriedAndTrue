using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbScheduledEventInvocationLog
    {
        public string Id { get; set; }
        public string EventId { get; set; }
        public int? Status { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual HdbScheduledEvent Event { get; set; }
    }
}
