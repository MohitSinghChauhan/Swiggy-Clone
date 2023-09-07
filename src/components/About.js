import React from 'react';
import OurStoryImg from '../assets/8292849.jpg';
import MissionImg from '../assets/3672341.jpg';
import MaleAvatar from '../assets/undraw_male_avatar_g98d.svg';
import FemaleAvatar from '../assets/undraw_female_avatar_efig.svg';

export default function About() {
	return (
		<div className='bg-white'>
			<main>
				<section className=' py-12'>
					<img src={OurStoryImg} alt='About' className='mx-auto w-1/2' />
					<div className='container mx-4 md:mx-auto text-center'>
						<h2 className='mb-4 text-4xl  md:text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Our Story</h2>
						<p className='text-gray-700 text-l md:text-2xl leading-relaxed mx-8 md:mx-auto md:max-w-6xl mb-16'>
							Childhood friends Mohit and Amanda started Food Villa in 2018 to deliver fresh, homemade meals to busy urbanites. Struggling to find healthy, affordable delivery options in the city, they launched their startup out of a small apartment kitchen. Through word of mouth, Food Villa quickly gained a following for its nutritious, reasonably priced dishes. Starting small with hustle and heart, John and Jane bootstrapped the company themselves.
							<br />
							<br />
							Today, Food Villa operates large kitchens in 3 cities while staying true to its roots. As the business expands, the founders remain hands-on, ensuring quality standards for every order. At its core, Food Villa provides a heartwarming homemade food alternative.
						</p>
					</div>
				</section>

				<section className='py-24 bg-gray-100'>
					<div className='container mx-auto'>
						<h2 className='mb-4 mx-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>Our Mission</h2>

						<div className='flex flex-col md:flex-row md:-mx-6'>
							<div className='md:w-1/2 md:px-4'>
								<p className='text-gray-700 text-l md:text-xl leading-relaxed mt-5 mx-10 md:max-auto md:max-w-6xl '>
									At Food Villa, our mission is to bring wholesome homemade meals to your door. We started as a way for busy people to enjoy nutritious, affordable food without the hassle of cooking.
									<br />
									<br />
									We believe home-cooked dinners nourish the soul. Our chefs craft each meal from scratch using fresh, local ingredients to provide a tasty alternative to greasy takeout.
									<br />
									<br />
									We keep quality standards high while prices reasonable, so anyone can enjoy a little home cooking, even on their busiest days.
									<br />
									<br />
									We strive to be more than just a food delivery service - we want to be a part of our customers' daily lives, serving up our heartwarming dishes with a side of comfort and care. From our kitchen to your home, Food Villa delivers food that warms you up.
								</p>
							</div>

							<div className='md:w-1/2 md:px-4 mt-8 md:mt-0'>

                  <img src={MissionImg} alt='Mission' className='mx-auto mix-blend-darken w-2/3' />

							</div>
						</div>
					</div>
				</section>

				<section className='py-12'>
					<div className='container mx-auto'>
						<h2 className='text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-8 mb-16'>What Our Customers Say</h2>

						<div className='flex flex-wrap mx-4 md:mx-auto '>
							<div className='w-full md:w-1/2 px-4 mb-6'>
								<div className='bg-gray-100 p-6 rounded-lg'>
									<img src={MaleAvatar} className='w-12 h-12 rounded-full mb-2' />

									<p className='text-gray-600 leading-relaxed mb-4'>"The food from Food Villa is so fresh and flavorful! Their delivery service is super douper fast and reliable."</p>

									<p className='font-medium'>- Mohit Singh Chauhan</p>
								</div>
							</div>
							<div className='w-full md:w-1/2 px-4 mb-6'>
								<div className='bg-gray-100 p-6 rounded-lg'>
									<img src={FemaleAvatar} className='w-12 h-12 rounded-full mb-2' />

									<p className='text-gray-600 leading-relaxed mb-4'>"I can always count on Food Villa for a home-cooked, healthy meal after a long day at the office. Highly recommend!"</p>

									<p className='font-medium'>- Radhika</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
