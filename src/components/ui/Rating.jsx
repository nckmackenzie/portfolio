import { AiFillStar } from 'react-icons/ai';
function Rating({ rating }) {
  return (
    <div className="text-primary-400 flex items-center gap-1">
      {[...Array(rating)].map((_, i) => (
        <AiFillStar key={i} />
      ))}
    </div>
  );
}

export default Rating;
