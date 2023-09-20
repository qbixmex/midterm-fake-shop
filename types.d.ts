export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type Rating = {
  rate: number;
  count: number;
};

export type ProductResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: Rating;
};
