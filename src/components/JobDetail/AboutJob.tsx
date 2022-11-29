import moment from 'moment'
import { IJob } from '../../redux/jobs/types'
import { formatText } from '../../utils/formatText'

interface IProps {
	job: IJob
}

const AboutJob = ({ job }: IProps) => {
	const { createdAt, salary, title, description } = job
	const createdTime = moment(createdAt).fromNow() // Time ago format

	//  Formatted text with headings //
	const firstHeadWord = 'Responsopilities:'
	const secondHeadWord = 'Compensation & Benefits:'
	const { firstPart, secondPart, arrList } = formatText(
		description,
		firstHeadWord,
		secondHeadWord
	)

	return (
		<div>
			{/* Title, salary, created */}
			<div className='grid overflow-hidden grid-cols-2 md:grid-cols-4 auto-rows-auto gap-1 items-center mb-4 md:order-1'>
				<h2 className='text-[#3A4562] text-2xl font-bold col-span-3'>
					{title}
				</h2>
				<p className='text-sm sm-text-lg text-[#38415D]/60 md:order-3 md:mt-2'>
					Posted {createdTime}
				</p>
				<div className='flex flex-col items-end md:order-2'>
					<p className='text-[#38415D]/80 text-base md:order-2'>
						Brutto, per year
					</p>
					<h2 className='text-[#3A4562] text-sal font-bold md:order-1'>
						€ {salary.replace(/k/g, ' 000')}
					</h2>
				</div>
			</div>
			{/* Description */}
			<div>
				<p className='text-[#38415D]/80 mb-5'>{firstPart}</p>
				<h2 className='font-bold text-xl text-[#3A4562] mb-3'>
					{firstHeadWord}
				</h2>
				<p className='text-[#38415D]/80 mb-5'>{secondPart}</p>
				<h2 className='font-bold text-xl text-[#3A4562] mb-5'>
					{secondHeadWord}
				</h2>
				<ul className='list-disc list-inside mb-5'>
					{arrList.map((item, idx) => (
						<li key={idx} className='text-[#38415D]/80'>
							{item.replace(/\./g, '')}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export { AboutJob }
