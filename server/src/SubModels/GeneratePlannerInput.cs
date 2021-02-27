using System.Collections.Generic;

namespace server.Models
{
    public class GeneratePlannerInput
    {
        public GeneratePlannerArgs input { get; set; }
    }

    public class GeneratePlannerArgs
    {
        public ICollection<string> mealTypes { get; set; }
        public string _gte { get; set; }
        public string _lte { get; set; }
    }
}