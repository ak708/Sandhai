import Navbar from "./Navbar";
import NFTTile from "./NFTTile";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";

export default function Marketplace() {
  const sampleData = [
    {
      name: "NFT#1",
      description: "Sandhai First NFT",
      website: "",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fth-i.thgim.com%2Fpublic%2Fincoming%2Fi4b0bu%2Farticle65986375.ece%2Falternates%2FFREE_1200%2F9712_3_10_2022_15_21_37_4_DSC_6525.JPG&imgrefurl=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Ftamil-nadu%2Fuzhavar-sandhai-the-market-for-farmers%2Farticle65986373.ece&tbnid=BfD6LTeyQ4aK6M&vet=12ahUKEwjQi4L7nM_8AhVYMrcAHaShA-QQMygBegUIARDVAQ..i&docid=YVSzlYqLcdIomM&w=1200&h=800&q=sandhai&ved=2ahUKEwjQi4L7nM_8AhVYMrcAHaShA-QQMygBegUIARDVAQ",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
  ];
  const [data, updateData] = useState(sampleData);

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-20">
        <div className="md:text-xl font-bold text-white">Top NFTs</div>
        <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
          {data.map((value, index) => {
            return <NFTTile data={value} key={index}></NFTTile>;
          })}
        </div>
      </div>
    </div>
  );
}
