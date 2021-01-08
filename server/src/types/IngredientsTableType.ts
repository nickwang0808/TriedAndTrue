export interface IIngredientsTableType {
  recipe_id: string;
  raw_text: string;
  preparation: null | string;
  name: null | string;
  id: string;
  quantity_numerator: null | number;
  quantity_denominator: null | number;
  unit: null | string;
  optional: null | boolean;
}
