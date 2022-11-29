import { useEffect } from 'react'
import { Card } from '../../components/Card/Card'
import { Spinner } from '../../components/Spinner'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const Home = () => {
	const { jobs, status } = useTypedSelector(state => state.jobs)
	const { fetchJobs } = useActions()

	useEffect(() => {
		if (jobs.length === 0) fetchJobs()
	}, [])

	if (status === 'loading') {
		return <Spinner />
	}

	return (
		<div className='flex items-center flex-col bg-[#e6e9f2]'>
			{jobs.map(job => (
				<Card key={job.id} job={job} />
			))}
		</div>
	)
}

export { Home }
