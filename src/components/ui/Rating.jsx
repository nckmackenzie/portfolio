import { AiFillStar } from 'react-icons/ai';
function Rating({ rating }) {
  return (
    <div className="text-primary-400 flex items-center gap-1">
      {[...Array(rating)].map(rat => (
        <AiFillStar />
      ))}
    </div>
  );
}

export default Rating;
