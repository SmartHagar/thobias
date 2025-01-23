/** @format */

interface Props {
  id: string | undefined;
  price: number | undefined;
  stock: number | undefined;
  product_id: string | undefined;
  product_variant_id: string | undefined;
}

const addToCart = (product: Props) => {
  console.log({ product });
};

export default addToCart;
