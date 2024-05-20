import { ProductType } from "../types/ProductsTypes";

function filterProductsByTerm(
  products: ProductType[],
  term: string
): ProductType[] {
  const filteredProducts = products.filter((p) => {
    const lcTerm = term.toLowerCase();
    const lcProdName: string = p.name.toLowerCase();
    const lcProdDescription: string = p.description.toLowerCase();

    if (lcProdName.includes(lcTerm) || lcProdDescription.includes(lcTerm))
      return p;
  });

  return filteredProducts;
}

function filterProductsByPrice(
  products: ProductType[],
  min: number,
  max: number
): ProductType[] {
  const minFilter = min ?? 0;

  const filteredProducts = products.filter((p) => {
    const maxFilter = max ?? p.price + 1;
    const prodPrice = Number(p.price);

    if (prodPrice >= minFilter && prodPrice <= maxFilter) return p;
  });

  return filteredProducts;
}

export { filterProductsByTerm, filterProductsByPrice};
