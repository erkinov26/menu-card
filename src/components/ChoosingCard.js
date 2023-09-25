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
          <div key={item.id}>
            <div className="imgContainer">
              <img src={item.imgSource} alt="imgSource" />
            </div>
            <h1 className="cardItemTitle">{item.name}</h1>
            <p className="cardItemText">{item.text}</p>
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
        );
      })}
    </div>
  );
};

export default ChoosingCard;
