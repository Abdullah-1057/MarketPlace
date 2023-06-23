import React from "react";
import { useState, useEffect } from "react";
import { useMarketplace } from "@thirdweb-dev/react";
import Link from "next/link";
import NFTCard from "./NFTCard";
const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24  md:grid-cols-2 md:pt-0  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
};

const Listings = () => {
  const [listing, setListing] = useState([]);
  const myMarketPlace = useMarketplace(
    "0x931467BC7e712D2a4C3479227381AA868a98965C"
  );
  console.log(myMarketPlace);

  useEffect(() => {
    getlistings();
  }, []);
  const getlistings = async () => {
    try {
      const List = await myMarketPlace.getAllListings();
      console.log(List)
      setListing(List);
      // console.log(List);
      // console.log("---------")
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={style.wrapper}>
      {listing.length > 0 ? (
        listing?.map((item, index) => (
          <Link
            key={index}
            href={`assets/${item.assetContractAddress}/${item.id}`}
          >
            <a> <NFTCard listing = {item}/></a>
           
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Listings;
