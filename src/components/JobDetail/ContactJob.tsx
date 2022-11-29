import React, { useEffect, useState } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'
import axios from 'axios'
import { IJob } from '../../redux/jobs/types'
import { IoLocationSharp } from 'react-icons/io5'
import { Spinner } from '../Spinner'
import { Map } from '../Map/Map'

const API_KEY = import.meta.env.VITE_API_KEY as string // API key for using Google Maps API

interface IProps {
	job: IJob
}

const ContactJob = ({ job }: IProps) => {
	// Default location for Map //
	const [location, setLocation] = useState({
		lat: 37.4281350802915,
		lng: -122.0792542197085
	})
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: API_KEY
	})
	const { email, phone, name, address } = job

	// --------- Geocoding location from API --------- //

	// useEffect(() => {
	//   axios(
	//     `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`
	//   )
	//     .then((res) => res.data)
	//     .then((jsonData) => {
	//       setLocation(jsonData.results[0].geometry.location);
	//     })
	//     .catch((error) => {
	//       throw error;
	//     });
	// }, []);

	if (!isLoaded) return <Spinner />

	return (
		<div className='max-w-[372px] h-[436px] xl:w-[402px] rounded-lg flex flex-col '>
			<h2 className='xl:hidden text-3xl text-[#3A4562] font-bold mb-[10px]'>
				Contacts
			</h2>
			<div className='xl:hidden mb-5 md:mb-10 border-t border-[#3A4562] opacity-[0.13] md:col-span-2 md:order-3'></div>

			<div className='bg-[#2A3047] flex flex-col justify-center pl-20 w-full h-[188px] rounded-t-lg'>
				<h2 className='text-[#E7EAF0] font-bold text-xl mb-2'>{name}</h2>
				<div className='flex mb-2'>
					<IoLocationSharp size={20} className='text-[#FFFFFF]/60 mr-2' />
					<p className='text-[#E8EBF3] text-lg font-sans'>{address}</p>
				</div>
				<p className='text-lg text-[#FFFFFF]/60 xl:text-[#E8EBF3] font-sans'>
					{phone}
				</p>
				<p className='text-lg text-[#FFFFFF]/60 xl:text-[#E8EBF3] font-sans'>
					{email}
				</p>
			</div>
			<Map location={location} />
		</div>
	)
}

export { ContactJob }
