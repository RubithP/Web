export class ProductoClass {
  create(Constructor: typeof ProductoClass)
  {
    Constructor.prototype;
  }
  nombre: string;
  precio: number;
  descripcion: string;
  fabricante: string;
}