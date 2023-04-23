import Product from "./product/product";
import NotFound from "./notFound";

type ProductListProps = {
  data: productType[] | null;
};
export type productType = {
  active: boolean;
  description: string;
  id: string;
  image: string;
  name: string;
  promotion: boolean;
  rating: string;
};
const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="w-full bg-productsBg  flex items-center flex-col  ">
      <div className="w-11/12 flex flex-col items-center justify-center gap-7 py-6 md:flex-row flex-wrap">
        {data && data?.length > 0 ? (
          data &&
          data.map((el, idx) => {
            return (
              <Product
                active={el.active}
                description={el.description}
                id={el.id}
                image={el.image}
                name={el.name}
                promotion={el.promotion}
                rating={el.rating}
                key={idx}
              />
            );
          })
        ) : (
          <NotFound/>
        )}
      </div>
    </div>
  );
};
export default ProductList;
