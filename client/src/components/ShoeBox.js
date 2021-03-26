import "./ShoeBox.css";
import { Link } from "react-router-dom";


const ShoeBox = () => {
  return (
    <div className="ShoeBox">
        <div className= "xd">

            <div ></div>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default ShoeBox;