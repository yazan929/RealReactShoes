

const ShoeBox = ({ photo, msg, name ,productId }) => {
  return (
      <div className="product">
          <img src={photo} alt={name} />

          <div className="product__info">
              <p className="info__name">{name}</p>
                
              {/* <p className="info__description">{msg.substring(0, 100)}...</p> */}
          </div>
      </div>
  );
};

export default ShoeBox;
