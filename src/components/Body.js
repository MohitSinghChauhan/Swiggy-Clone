import RestrauntCard from './RestrauntCard';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';
import Search from './Search';
import Shimmer from './Shimmer';
import restaurantsJSON from '../data.json'
import { useRef, useCallback } from 'react';
const Body = () => {
	const [restaurants, actualData, setRestaurants, loading] = useRestaurantList();
	const observer = useRef();

	const restaurantData = restaurantsJSON.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
	console.log(loading);
	console.log(restaurantData);

	
	setTimeout(() => {
	if(restaurants===undefined){
		window.location.reload();
	}}, 10000);

	const lastElement = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				console.log('last element');
			}
		});
		if (node) observer.current.observe(node);
	});
	// observer.current = restaurants.length;
	// console.log(observer.current);
	return (
		<>
			<Search restaurants={restaurants} actualData={actualData} setRestaurants={setRestaurants} />

			{/* fake shimmer for 1 sec */}
			
			{loading ? (
				<Shimmer />
			) : (
				<div>
					<div className='w-full md:m-auto md:w-4/5 flex flex-wrap gap-6 justify-evenly'>
						{restaurants.length === 0 ? (
							<p className='text-center w-full text-3xl my-5'>No restaurant found...</p>
						) : (
							restaurantData?.map((restaurant) => {
								{
									return (
										<Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}>
											<div className='border-transparent h-full hover:scale-110 transition duration-0 hover:duration-450'>
												<RestrauntCard {...restaurant.info} />
											</div>
										</Link>
									);
								}
							})
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Body;
