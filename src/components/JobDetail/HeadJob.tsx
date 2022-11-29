import { IoBookmarkOutline, IoShareSocial } from 'react-icons/io5'

const HeadJob = () => {
	return (
		<div className='flex flex-col md:grid md:grid-cols-2'>
			<h2 className='text-3xl mb-3 md:mb-0 font-bold text-[#3A4562] md:order-1'>
				Job Detail
			</h2>
			<div className='mb-6 md:mb-10 md:mt-2.5 border-t border-[#3A4562] opacity-[0.13] md:col-span-2 md:order-3'></div>
			<div className='flex flex-shrink mb-8 text-[#3A4562] md:mb-0 md:order-2 md:items-center md:justify-end'>
				<div className='mr-3'>
					<IoBookmarkOutline size={20} />
				</div>
				<p className='mr-9 text-base'>Save to my list</p>
				<div className='mr-3'>
					<IoShareSocial size={20} />
				</div>
				<p className='text-base'>Share</p>
			</div>
		</div>
	)
}

export { HeadJob }
