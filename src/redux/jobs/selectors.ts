import { RootState } from '../store'

export const selectAllJobs = (state: RootState) => state.jobs.jobs
export const selectOneJob = (state: RootState) => state.jobs.selectedJob
