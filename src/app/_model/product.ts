import { Category } from './category';
import { Usuarios } from './usuario';

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  content: string;
  rating: number;
  stock: number;
  discount: number;
  registration: string;
  categories: Category[];
  client: Usuarios;
  imageProfile: {
    imageName: string;
    urlImage: string;
  };
  imagesPost: [
    {
      imageName: string;
      urlImage: string;
    }
  ];
  quantitySold: number;
}
