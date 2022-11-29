import { JobState } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { fetchJobs, fetchJobsById } from './async'

const initialState: JobState = {
	jobs: [],
	selectedJob: {
		id: '',
		name: '',
		email: '',
		phone: '',
		title: '',
		salary: '',
		address: '',
		benefits: [],
		location: {
			lat: 0,
			long: 0
		},
		pictures: [],
		createdAt: '',
		updatedAt: '',
		description: '',
		employment_type: []
	},
	status: 'loading'
}

export const jobSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchJobs.pending, state => {
				state.status = 'loading'
				state.jobs = []
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.jobs = action.payload
			})
			.addCase(fetchJobs.rejected, state => {
				state.status = 'error'
				state.jobs = []
			})
			.addCase(fetchJobsById.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchJobsById.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.selectedJob = action.payload
			})
			.addCase(fetchJobsById.rejected, state => {
				state.status = 'error'
			})
	}
})

export const JobActionsCreator = jobSlice.actions
