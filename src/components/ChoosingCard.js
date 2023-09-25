import Header from "./Header";

const ChoosingCard = ({
  data,
  increasingQuantity,
  decreasingQuantity,
  removeList,
}) => {
  const defineNall = (item) => {
    if (item.quantity === 1) {
      removeList(item.id);
    } else {
      decreasingQuantity(item.id);
    }
  };
  return (
    <div className="choosingCard">
      <Header title="Your Card" text="Yours is empty" />
      {data.map((item) => {
        return (
          <div className="cards" key={item.id}>
            <div className="choosingImgContainer">
              <img src={item.imgSource} alt="imgSource" />
            </div>
            <div>
              <h1 className="cardItemTitle">{item.name}</h1>
              <div className="cardItemBottom">
                <p className="price">${item.price * item.quantity}</p>
                <div>
                  <button className="btn" onClick={() => defineNall(item)}>
                    -
                  </button>
                  <button className="btn">{item.quantity}</button>
                  <button
                    className="btn"
                    onClick={() => increasingQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChoosingCard;
