import Image from "next/image";
import fullStar from "../../../public/assets/images/fullStar.svg";
import halfStar from "../../../public/assets/images/halfStar.svg";
import {StarRatingProps} from "@/staticData/AllStaticData"


const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const HalfStar = rating % 1 !== 0; // Whether to show a half star or not 

  return (
    <div className="flex items-center gap-1 mb-2">
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Image
          key={`full-${index}`}
          src={fullStar}
          alt="full star"
          className="h-5 w-5"
        />
      ))}
      {/* Half Star */}
      {HalfStar && (
        <Image
          src={halfStar}
          alt="half star"
          className="h-5 w-5"
        />
      )}
      {/* Rating Text */}
      <p className="text-sm text-primary dark:text-white">
        {rating}/<span className="text-textGray dark:text-white">5</span>
      </p>
    </div>
  );
};

export default StarRating;