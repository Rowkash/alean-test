export interface JobState {
	jobs: IJob[]
	selectedJob: IJob
	status: string
}

export interface IJob {
	id: string
	name: string
	email: string
	phone: string
	title: string
	salary: string
	address: string
	benefits: string[]
	location: Location
	pictures: string[]
	createdAt: string
	updatedAt: string
	description: string
	employment_type: string[]
}

interface Location {
	lat: number
	long: number
}
