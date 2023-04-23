import Image from "next/image"
type ProductImageTypes = {
    src: string;
  name: string;
  promo: boolean;
  active: boolean;
}
const ProductImage = ({ src, name,promo,active }: ProductImageTypes) => {
    return (
      <div className="w-full h-1/2 relative">
        <Image
          src={src}
          alt={`${name} photo.`}
          priority
          width={640}
          height={480}
          className={`${!active&&'grayscale'} rounded-t-lg w-full h-full`}
        />
        {promo && (
          <div className="absolute top-[10%] w-24 h-7    bg-promo  flex items-center justify-center">
            <p className="text-center text-white font-medium tracking-wider">
              Promo
            </p>
          </div>
        )}
      </div>
    );
    
}
export default ProductImage;