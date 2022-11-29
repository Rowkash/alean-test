import { fetchJobs, fetchJobsById } from './../redux/jobs/async'
import { JobActionsCreator } from './../redux/jobs/index'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const allActionsCreator = {
	...JobActionsCreator,
	fetchJobs,
	fetchJobsById
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(allActionsCreator, dispatch)
}
