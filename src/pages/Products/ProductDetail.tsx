import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
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
            src={`data:image/jpeg;base64,${product.image}`}
            alt={`imagem do ${product.name}`}
            style={{ width: "40rem", height: "30rem" }}
          />
        </div>
        <div className="productDetailInfoContainer">
          <h2>{product.name}</h2>
          <p className="infoBrandText">Genérico</p>
          <p className="infoPriceText">
            <span className="spanDiscount">
              R${Number(product.price.replace(",", ".")) * 1.3}
            </span>
            <span className="spanPrice">R${product.price.replace(",", ".")}</span>
          </p>
          <p className="infoDescriptionText">{product.description}</p>
          <div className="infoButtonDiv">
            <Button text="Adicionar ao Carrinho" onClick={() => {}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
