export interface Category{
    id:number;
    category:string;
    subCategory:string;
}
export interface SuggestedProduct{
    banerimage:string;
    category:Category;
}

export interface NavigationItem{
    category:string;
    subcategories:string[];
}
export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    quantity: number;
    originalPrice: number;
    discount: number;
    finalPrice: number;
  }