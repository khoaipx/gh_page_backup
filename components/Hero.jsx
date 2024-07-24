import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GrettingList } from '../data/grettings';
import UserImg from '../public/assets/images/icons/square.png';

const Hero = () => {
	const [arrItem, setArrItem] = useState(0);

	const nextItem = () => {
		setArrItem((prevCount) => {
			const check =
				prevCount >= GrettingList.length - 1 ? 0 : Number(prevCount) + 1;
			localStorage.setItem('arrItem', check);
			return check;
		});
	};

	useEffect(() => {
		const initialValue = localStorage.getItem('arrItem');
		if (initialValue) setArrItem(initialValue);
	}, []);

	return (
		<section>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='rounded-full border-[3px] border-sh-blue relative scale-95 hover:scale-100 transition ease-in shadow-lg'>
					<div className='h-44 w-44 select-none relative group'>
						<a
							href='https://www.linkedin.com/in/khoaipx93/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								className='rounded-full w-full h-full'
								src={UserImg}
								alt='KhoaiAvatar'
								layout='fill'
								draggable='false'
							/>
							<div className='absolute bottom-0 flex-col items-center hidden mb-44 group-hover:flex'>
								<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
									{"Hey, It's so nice to see you here, thanks for visiting !"}
								</span>
								<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
							</div>
						</a>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							onClick={nextItem}
							className='text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{GrettingList[arrItem].text}
							<span className='italic'>!</span>
						</h2>
						<div className='absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{GrettingList[arrItem].lang}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>

					<h1 className='text-2xl font-normal leading-10'>
						<span className='block'>
							{'I am '}
							<a
								href='/about'
								target='_self'
							>
								<span className='font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none'>
									Pham Xuan Khoai
								</span>
							</a>
							, a Data Scientist
						</span>
						<span>
						with over 8 years of experience, including more than 3 years of managing a high-performing team. I successfully built a data science team from the ground up, which currently has 12 members and peaked at 18 members.
							<span className='mt-5 block'>
								I have leveraged AI and data analysis to enhance production and streamline workflows, driving the company towards data-driven decision-making.
							</span>
						</span>
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
