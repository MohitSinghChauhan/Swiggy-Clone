import { useState, useEffect } from 'react';
import { IMAGE_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import MenuShimmer from './MenuShimmer';
import {
  faStar,
  faStopwatch,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const [res, isLoaded] = useRestaurant();
  const [menuInfo, setMenuInfo] = useState(null);

  const dispatch = useDispatch();


  const handleAdditems = (item) => {
    dispatch(addItem(item));
  };
  if (!res) return null;
  console.log(res);

  return !isLoaded ? (
    <MenuShimmer />
  ) : (
    <>
      {/* #3C4852  primary - #174d44*/}
      <div className="bg-[#3C4852] text-white py-8 mb-5">
        <div className="m-auto w-4/5 md:flex justify-evenly items-center gap-5">
          <div>
            <img
              className="md:w-96"
              src={
                IMAGE_CDN_URL + res.cards[0].card.card.info?.cloudinaryImageId
              }
            />
          </div>

          <div className="md:w-1/3 ">
            <div className="text-3xl pb-2 mt-2 md:mt-0">{res.cards[0].card.card.info?.name}</div>
            <div className="text-xl pb-2">Cuisines: {res.cards[0].card.card.info?.cuisines?.join(', ')}</div>
            <div className="pb-2">{res.cards[0].card.card.info?.locality}</div>
            <div className="flex gap-2 justify-between  md:flex-row   md:justify-start text-xl mb-2 md:mb-0">
              <div className="p-2">
                <FontAwesomeIcon icon={faStar} /> {res.cards[0].card.card.info?.avgRatingString}
              </div>
              <div className="p-2">
                {' '}
                <FontAwesomeIcon icon={faStopwatch} /> {res.cards[0].card.card.info?.sla?.slaString}
              </div>
              <div className=" p-2">
                <FontAwesomeIcon icon={faMoneyBill} /> {res.cards[0].card.card.info?.costForTwoMessage}
              </div>
            </div>
          </div>

          <div className="border-2 border-white md:p-5 p-2 border-dashed md:border-solid text-xl relative bg-gray-900 sm:bg-[#3C4852] ">
            <p className="md:absolute top-[-24px] md:p-2 md:translate-x-[-10px] bg-gray-900  sm:bg-[#3C4852]">
              Offers :{' '}
            </p>
            <p>{res.cards[0].card.card.info?.aggregatedDiscountInfo?.descriptionList[0].meta} </p>
            <p>{res.cards[0].card.card.info?.aggregatedDiscountInfo?.descriptionList[1].meta} </p>
          </div>
        </div>
      </div>
      <nav className="w-3/5 m-auto text-xl ">
        <button className="border-2 border-black p-2 mb-5">
          <Link to="/">Home</Link>
        </button>
      </nav>
      {res.cards[2].groupedCard.cardGroupMap.REGULAR.cards?.map((cardData) => {
        if (
          cardData.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        ) {
        //   const item = cardData.card.card;
          const items = cardData.card.card.itemCards;

          return (
			items.map((item) =>(
            <div className="m-auto w-3/5" key={item.card.info.id}>
              {item.card.info?.imageId === '' ||
              !item.card.info?.imageId ? null : (
                <div className="flex gap-5  flex-col-reverse md:flex-row justify-between p-5 mb-5 shadow-md items-center ">
                  <div className="w-3/4">
                    <p className="text-xl font-bold pb-2">{item.card.info?.name}</p>
                    <p className="font-bold pb-2">
                      ₹ {Math.floor(item.card.info?.price) / 100}
                    </p>
                    <p className="pb-2">{item.card.info?.description}</p>
                    <button
                      onClick={() => handleAdditems(item.card.info)}
                      className="border-2 text-white border-white bg-gray-900 px-3 py-2 "
                    >
                      + Add to cart
                    </button>
                  </div>
                  <div className="">
                    <img
                      className="md:w-52 "
                      src={IMAGE_CDN_URL + item.card.info?.imageId}
                    />
                  </div>
                </div>
              )}
            </div>)
		   ) );
        }
      })}
      ;
    </>
  );
};

export default RestaurantMenu;
