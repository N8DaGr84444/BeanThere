export interface CoffeeEntry {
  id?: string;
  shop_name: string;
  shop_location: string;
  cost_level?: number;
  vibe?: number;
  wifi?: boolean;
  seating?: boolean;
  drink?: string;
  food_level?: string[];
  rating: number;
  notes?: string;
  created_at?: number;
}
