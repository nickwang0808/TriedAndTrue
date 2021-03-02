

using System.Collections.Generic;

namespace server.Models
{
    public class InsertIngredientsToListInput
    {
        public InsertIngredientsToListArgs input { get; set; }
    }

    public class InsertIngredientsToListArgs
    {
        public string shoppingListId { get; set; }
        public ICollection<IngredientsToAddToList> ingredientsToAddToList { get; set; }
    }

    public class IngredientsToAddToList
    {
        // this info is grouped by recipe
        public string date { get; set; }
        public string recipe_id { get; set; }
        public int recipe_index { get; set; }
        public ICollection<string> ingredientIds { get; set; }
    }
}