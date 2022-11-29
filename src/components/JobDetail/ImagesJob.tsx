interface IProps {
	pictures: string[]
}

const ImagesJob = ({ pictures }: IProps) => {
	return (
		<div className='container mb-16'>
			<h2 className='font-bold text-xl text-[#3A4562] mb-2.5'>
				Attached images
			</h2>
			<div className='mb-5 border-t border-[#3A4562] opacity-[0.13]'></div>

			<div className='grid grid-cols-2 md:grid-cols-3 gap-2.5'>
				{pictures?.map((img, idx) => (
					<div key={idx} className='max-w-52 h-36 mr-[10px] '>
						<img className='w-full h-full rounded-lg' src={img} alt='pic' />
					</div>
				))}
			</div>
		</div>
	)
}

export { ImagesJob }
