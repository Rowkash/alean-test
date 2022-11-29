import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IJob } from './types'

const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
	try {
		const { data } = await axios.get<IJob[]>(
			'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
			{
				headers: {
					Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
				}
			}
		)
		return data
	} catch (error) {
		throw error
	}
})

const fetchJobsById = createAsyncThunk(
	'jobs/fetchJobsById',
	async (id: string) => {
		try {
			const { data } = await axios.get<IJob[]>(
				'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
				{
					headers: {
						Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
					}
				}
			)
			const job = data.find(item => item.id === id)!
			return job as IJob
		} catch (error) {
			throw error
		}
	}
)

export { fetchJobs, fetchJobsById }
