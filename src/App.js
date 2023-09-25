import "./App.css";
import OptionalCard from "./components/OptionalCard";
import ChoosingCard from "./components/ChoosingCard";
import { useState } from "react";
// comment is added
function App() {
  const [info, setInfo] = useState([
    {
      id: 3,
      name: "Nike Epic React Flyknit 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab consectetur sequi dolores perferendis sunt nam rem quis ex, laborum harum similique quos praesentium consequatur?",
      price: 98,
      imgSource:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f16e6164-f31c-41d2-9b97-60a0a4dede91/air-max-90-se-mens-shoes-2VX0QQ.png",
      purchased: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "Nike React Flyknit 2",
      text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab consectetur sequi dolores perferendis sunt nam rem quis ex, laborum harum similique quos praesentium consequatur?",
      price: 71,
      imgSource:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f9e940d3-2192-434e-a017-072303ce2f14/air-max-90-mens-shoes-6mml4F.png",
      purchased: false,
      quantity: 0,
    },
  ]);
  const [newArray, setNewArray] = useState([]);

  const updatePurchasedStatus = (itemId) => {
    const updatedInfo = info.map((item) => {
      if (item.id === itemId) {
        setNewArray([
          ...newArray,
          {
            ...item,
            purchased: true,
            quantity: 1,
          },
        ]);
        return {
          ...item,
          purchased: true,
          quantity: 1,
        };
      }
      return item;
    });
    setInfo(updatedInfo);
  };

  const increasingQuantity = (itemId) => {
    const increasedData = newArray.map((data) => {
      if (data.id === itemId) {
        return {
          ...data,
          quantity: data.quantity + 1,
        };
      }
      return data;
    });
    setNewArray(increasedData);
  };

  const decreasingQuantity = (itemId) => {
    const decreasedData = newArray.map((data) => {
      if (data.id === itemId) {
        return {
          ...data,
          quantity: data.quantity - 1,
        };
      }
      return data;
    });
    setNewArray(decreasedData);
  };

  const removeList = (id) => {
    const removeData = newArray.filter((data) => data.id !== id);
    setNewArray(removeData);

    const updateData = info.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: 0,
          purchased: false,
        };
      }
      return item;
    });
    setInfo(updateData);
  };

  return (
    <div className="main">
      <OptionalCard data={info} updatePurchasedStatus={updatePurchasedStatus} />
      <ChoosingCard
        data={newArray}
        setData={setNewArray}
        increasingQuantity={increasingQuantity}
        decreasingQuantity={decreasingQuantity}
        removeList={removeList}
      />
    </div>
  );
}

export default App;
