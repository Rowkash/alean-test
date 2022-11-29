import { IJob } from '../../redux/jobs/types'
import { IoLocationSharp, IoBookmarkOutline } from 'react-icons/io5'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Rating } from '../Rating'

interface IProps {
	job: IJob
}

const Card = ({ job }: IProps) => {
	const { name, address, pictures, title, createdAt, id } = job // Destruct prop
	const date = moment(createdAt).fromNow() // Time ago format

	return (
		<div className='h-52 w-screen flex justify-center sm:h-[164px] sm:max-w-[1400px] rounded-lg shadow m-1 p-3 bg-[#EFF0F5] sm:bg-[#FFFFFF]'>
			{/* Container */}
			<div className='flex w-full h-full'>
				{/* Pictures */}
				<div className='w-16 h-16 flex-shrink-0 mr-5 my-auto'>
					<img
						className='w-full h-full rounded-full'
						src={pictures[0]}
						alt='logo'
					/>
				</div>
				{/* Info block */}
				<div className='grid w-full sm:flex sm:justify-between sm:basis-full'>
					{/* Rating, fav, created block */}
					<div className='sm:w-[266px] sm:h-[116px] flex justify-between sm:order-2 sm:flex-shrink-0 sm:my-auto'>
						<Rating />
						<div className='flex sm:flex sm:flex-col sm:justify-between sm:items-end sm:ml-8'>
							<div className='invisible sm:visible'>
								<IoBookmarkOutline />
							</div>
							<p className='text-sm text-[#878D9D]'>Posted {date}</p>
						</div>
					</div>

					{/* Ad, position, address, location block */}
					<div className='sm:flex sm:flex-col sm:justify-center sm:order-1 sm:mr-8'>
						<Link to={`/job/${id}`}>
							<h2 className='text-lg text-[#3A4562] mb-1.5 flex-shrink-0'>
								{title}
							</h2>
						</Link>
						<p className='text-base text-[#878D9D] mb-2'>
							{name} &#183; {address}
						</p>
						<div className='flex'>
							<div className='mr-2 text-[#878D9D]'>
								<IoLocationSharp size='18px' />
							</div>
							<p>{address}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Card }
