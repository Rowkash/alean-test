import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Spinner } from '../../components/Spinner'
import {
	HeadJob,
	AboutJob,
	ImagesJob,
	AdditionalJob,
	ContactJob
} from '../../components/JobDetail/index'

const DetailJob = () => {
	const { jobId = '' } = useParams<{ jobId: string }>() // Link ID job

	const { selectedJob, status } = useTypedSelector(state => state.jobs)
	const { fetchJobsById } = useActions()
	const { pictures, employment_type, benefits } = selectedJob

	useEffect(() => {
		fetchJobsById(jobId)
	}, [])

	if (status === 'loading') {
		return <Spinner />
	}

	return (
		<div className='w-screen xl:flex bg-white p-3 mx-auto my-2.5'>
			{/* INFO */}
			<div className='max-w-[774px] xl:mr-[82px]'>
				{/* Title, favor, share */}
				<HeadJob />

				{/* Button */}
				<button className='hidden md:visible h-14 w-32 bg-[#384564] rounded-lg text-white mb-8 md:block mx-auto md:mx-0'>
					Apply now
				</button>

				<AboutJob job={selectedJob} />

				{/* Button */}
				<button className='h-14 w-32 bg-[#384564] rounded-lg text-white mb-[135px] block mx-auto md:mx-0'>
					Apply now
				</button>

				<ImagesJob pictures={pictures} />

				<AdditionalJob time={employment_type} benefits={benefits} />
			</div>

			{/* Contact and MAP */}
			<ContactJob job={selectedJob} />
		</div>
	)
}

export { DetailJob }
