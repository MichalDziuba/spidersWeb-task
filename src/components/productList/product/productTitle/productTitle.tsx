
type ProductTitleProps = {
    title: string;
}
const ProductTitle = ({title}:ProductTitleProps) => {
    return (
        <h2 className="font-bold text-lg h-fit">
            {title}
        </h2>
    )
}
export default ProductTitle