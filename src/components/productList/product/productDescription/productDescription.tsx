type ProductDescriptionTypes = {
    text: string;
}
const ProductDescription = ({text}:ProductDescriptionTypes) => {
    return (
      <p className="text-secondary  font-semibold w-full h-full ">
        {text}
      </p>
    );
}
export default ProductDescription;