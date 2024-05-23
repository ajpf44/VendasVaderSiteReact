import { ProductType } from "../types/ProductsTypes";

function filterProductsByTerm(
  products: ProductType[],
  term: string
): ProductType[] {
  const filteredProducts = products.filter((p) => {
    const lcTerm = term.toLowerCase();
    const lcProdName: string = p.title.toLowerCase();
    const lcProdDescription: string = p.description.toLowerCase();

    console.log(
      lcProdName.includes(lcTerm) || lcProdDescription.includes(lcTerm)
    );
    if (lcProdName.includes(lcTerm) || lcProdDescription.includes(lcTerm))
      return p;
  });

  return filteredProducts;
}

function filterProductsByPrice(
  products: ProductType[],
  min: string,
  max: string
): ProductType[] {
  const minFilter = Number(min) ?? 0;

  const filteredProducts = products.filter((p) => {
    const prodPrice = Number(p.price.replace(",", "."));
    const maxFilter = max == "" ? prodPrice + 1 : Number(max);

    // console.log(
    //   `Produto: ${p.title}\n
    //    Preço: ${prodPrice}\n
    //    MinFilter: ${minFilter} Max Filter: ${maxFilter}\n
    //    State: ${prodPrice >= minFilter && prodPrice <= maxFilter}
    //   `
    // );
    
    if (prodPrice >= minFilter && prodPrice <= maxFilter) return p;
  });

  return filteredProducts;
}

export { filterProductsByTerm, filterProductsByPrice };
