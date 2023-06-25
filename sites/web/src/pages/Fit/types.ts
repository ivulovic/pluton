export interface TimelineProps {
  date: number;
  onSelect(meal: any): void;
}

export interface CalendarProps {
  date: number;
  onSelect(meal: any): void;
}

export interface Meal {
  title: string;
  description: string;
  size?: string;
  // img: string;
}

export interface MealType {
  name: string;
  time: string;
  time24: string;
}

export interface MealProps {
  title: string;
  description: string;
  size?: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  size?: string;
}

export interface TimetableRecipe {
  meals: Array<Recipe>;
}

export interface Timetable {
  date: number;
  recipes: Array<TimetableRecipe>;
}
