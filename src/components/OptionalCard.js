import Header from "../components/Header";

const OptionalCard = ({ data, updatePurchasedStatus }) => {

  return (
    <div className="optionalCard">
      <Header title="Picked Items" />
    {data.map((item) => {
      	return (
        <div key={item.id}>
        	<div className="imgContainer">
          	<img src={item.imgSource} alt="imgSource" />
        	</div>
        	<h1 className="cardItemTitle">{item.name}</h1>
        	<p className="cardItemText">{item.text}</p>
        	<div className="cardItemBottom">
          	<p className="price">${item.price}</p>
          	<button className={item.purchased?"btn-success":"btn"} onClick={()=>updatePurchasedStatus(item.id)} disabled={item.purchased?true:false}>
            	{item.purchased?"Okey":"Added to card"}
          	</button>
        	</div>
      	</div>)
    	})}
   
    </div>
  );
};
export default OptionalCard;
