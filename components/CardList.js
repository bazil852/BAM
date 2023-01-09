import React from "react";
import NFTCard from "./NFTCard";



const CardList = ({ list,type="horizontal" }) => {


  return (
    <div id="card-list" style={{flexDirection:type=="horizontal" ? "row" : "column", marginLeft:'10%'}}>
      {list.map((item,index) => (
        <div style={{marginTop:'5%'}}>
        <NFTCard price={item.price} nftName={item.name} nftSrc={item.src} key={index}/> 
        </div>
      ))}
    </div>
  );
};

export default CardList;
