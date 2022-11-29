interface IProps {
	time: string[]
	benefits: string[]
}

const AdditionalJob = ({ benefits, time }: IProps) => {
	return (
		<div>
			<h2 className='font-bold text-xl text-[#3A4562] mb-2.5'>
				Additional info
			</h2>
			<div className='mb-5 border-t border-[#3A4562] opacity-[0.13]'></div>
			<p className='text-[#38415D]/80 text-base'>Employment type</p>
			<div className='flex mb-[22px]'>
				{time?.map((item, idx) => (
					<div
						key={idx}
						className='mr-2.5 border-[#55699E]/30 border rounded-lg h-[50px] w-[121px] md:w-[222px] bg-[#a1b1db]/30 flex items-center justify-end md:justify-center'
					>
						<p className='font-bold text-[#55699E] pr-2.5 md:pr-0'>{item}</p>
					</div>
				))}
			</div>
			<p className='text-[#38415D]/80 text-base'>Benefits</p>
			<div className='flex mb-[22px]'>
				{benefits?.map((item, idx) => (
					<div
						key={idx}
						className='mr-2.5 border-[#FFCF00] border rounded-lg h-[50px] w-[122px] md:w-[222px] bg-[#FFCF00]/10 flex items-center justify-end md:justify-center'
					>
						<p className='font-bold text-[#55699E] pr-2.5'>{item}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export { AdditionalJob }
