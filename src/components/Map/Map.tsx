import { GoogleMap, Marker } from '@react-google-maps/api'
import { useCallback, useRef } from 'react'
import { mapTheme } from './theme'

interface IProps {
	location: {
		lat: number
		lng: number
	}
}

// Map Options
const options = {
	styles: mapTheme,
	mapTypeControl: false,
	streetViewControl: false,
	zoomControl: false,
	fullscreenControl: false
}

const Map = ({ location }: IProps) => {
	const mapRef = useRef(undefined)

	const onLoad = useCallback((map: any) => {
		mapRef.current = map
	}, [])

	const onUnmount = useCallback(() => {
		mapRef.current = undefined
	}, [])

	return (
		<GoogleMap
			mapContainerClassName='w-full h-[248px] rounded-b-lg'
			center={location}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={options}
		>
			<Marker position={location} />
		</GoogleMap>
	)
}

export { Map }
