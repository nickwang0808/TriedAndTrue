using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbCronEventInvocationLog
    {
        public string Id { get; set; }
        public string EventId { get; set; }
        public int? Status { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public DateTime? CreatedAt { get; set; }

        public virtual HdbCronEvent Event { get; set; }
    }
}
