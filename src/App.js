import "./App.css";
import OptionalCard from "./components/OptionalCard";
import ChoosingCard from "./components/ChoosingCard";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([
    {
      id: 3,
      name: "Nike Epic React Flyknit 2",
      text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab consectetur sequi dolores perferendis sunt nam rem quis ex, laborum harum similique quos praesentium consequatur?",
      price: 98.97,
      imgSource: "",
      purchased: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "Nike React Flyknit 2",
      text: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ab consectetur sequi dolores perferendis sunt nam rem quis ex, laborum harum similique quos praesentium consequatur?",
      price: 71.97,
      imgSource: "",
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

  const removeList = (id) =>{
    const removeData = newArray.filter(data => data.id !== id);
    setNewArray(removeData)

    const updateData = info.map(item=>{
      if(item.id === id){
        return {
          ...item,
          quantity:0,
          purchased:false
        }
      }
      return item;
    })
    setInfo(updateData);
   }

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
