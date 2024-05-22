import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CartShopButton from "../../components/Button/CartShopButton";
import { getProductById } from "../../services/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      setLoading(true);
      const p = await getProductById(id);
      setLoading(false);

      setProduct(p);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <section className="productDetailContainer">
        <div>
          <img
            src={`${product.images[0]}`}
            alt={`imagem do ${product.title}`}
            style={{ maxWidth: "45rem", maxHeight: "35rem" }}
          />
        </div>
        <div className="productDetailInfoContainer">
          <h2>{product.title}</h2>
          <p className="infoBrandText">{product.brand}</p>
          <p className="infoPriceText">
            <span className="spanDiscount">
              R${(Number(product.price) * 1.3 * 5.15).toFixed(2)}
            </span>
            <span className="spanPrice">
              R${((Number(product.price)  * 5.15) - 0.01).toFixed(2)}
            </span>
          </p>
          <p className="infoDescriptionText">{product.description}</p>
          <div className="infoButtonDiv">
            <CartShopButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
