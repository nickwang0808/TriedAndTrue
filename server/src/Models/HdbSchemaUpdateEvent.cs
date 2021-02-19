using System;
using System.Collections.Generic;

#nullable disable

namespace server.Models
{
    public partial class HdbSchemaUpdateEvent
    {
        public Guid InstanceId { get; set; }
        public DateTime OccurredAt { get; set; }
        public string Invalidations { get; set; }
    }
}
