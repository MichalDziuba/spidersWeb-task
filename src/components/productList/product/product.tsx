import ProductButton from "./productButton/productButton";
import ProductDescription from "./productDescription/productDescription";
import ProductImage from "./productImage/productImage";
import ProductRating from "./productRating/productRating";
import ProductTitle from "./productTitle/productTitle";
type ProductTypes = {
  active: boolean;
  description: string;
  id: string;
  image: string;
  name: string;
  promotion: boolean;
  rating: string;
};
const Product = ({
  active,
  description,
  id,
  image,
  name,
  promotion,
  rating,
}: ProductTypes) => {
  
  return (
    <div className=" flex flex-col w-72 h-itemHeight font-secondary rounded-b-lg bg-white rounded gap-2 mobile:w-itemWidth">
      <ProductImage name={name} src={image} promo={promotion} active={active} />
      <div className="h-1/2 flex flex-col w-full items-center justify-evenly   ">
        <div className="flex flex-col  w-11/12 h-3/6 ">
          <ProductTitle title={name} />
          <ProductDescription text={description} />
        </div>
        <div className="rounded-b flex flex-col justify-evenly gap-1 w-11/12 h-2/6 ">
          <ProductRating rating={rating} />
          <ProductButton active={active} />
        </div>
      </div>
    </div>
  );
};
export default Product;
