import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffexxx",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopingpagee</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle/>
          <ProductButtons />
        </ProductCard> 
     
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title  title='XXXX' />
          <ProductCard.Buttons />
        </ProductCard>

      </div>
    </div>
  );
};
