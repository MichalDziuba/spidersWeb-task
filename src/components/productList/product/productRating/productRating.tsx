import { useEffect, useState } from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import Rating from "@mui/material/Rating";
type ProductRatingTypes = {
    rating: string;
}
const ProductRating = ({ rating }: ProductRatingTypes) => {
    
    const [ratingValue, setRatingValue] = useState(0);
    useEffect(() => {
        setRatingValue(Number(rating)/2)
    },[rating])
    
    return (
      <div>
        <Rating 
          value={ratingValue}
          size='small'
                readOnly
                className='flex gap-2'
        />
      </div>
    );
}
export default ProductRating;
