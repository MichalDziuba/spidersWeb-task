type ProductButtonProps = {
    active: boolean;
}
const ProductButton = ({active}:ProductButtonProps) => {
    return (
        <button type="button" className={`w-full h-10 text-center text-white ${active ?'bg-blue':'bg-disabled'} rounded-md`}>
            {active?"Show details":"Unavailable"}
        </button>
    )
}
export default ProductButton