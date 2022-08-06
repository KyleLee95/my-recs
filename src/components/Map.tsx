import { Wrapper, Status } from '@googlemaps/react-wrapper'
import React, { ReactNode, useRef, useState, useEffect } from 'react'
import { Marker } from './MapMarker'

interface MapRendererProps {
  zoom: number
  center: google.maps.LatLngLiteral
  children: ReactNode
}

const MapRenderer = ({ center, zoom, children }: MapRendererProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom
        })
      )
    }
  }, [center, zoom, ref, map])

  return (
    <div style={{ height: '100%', width: '100%' }} ref={ref} id="map">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map })
        }
      })}
    </div>
  )
}

interface MapMarkerType {
  id: number
  lat: number
  lng: number
}

const mapMarkers = [
  { id: 0, lat: 41.850033, lng: -87.6500523 },
  { id: 1, lat: 41.850033, lng: -87.9500523 },
  { id: 2, lat: 41.650033, lng: -87.9500523 },
  { id: 3, lat: 41.550033, lng: -87.9500523 },
  { id: 4, lat: 42.350033, lng: -87.9500523 }
]

export const Map = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <div style={{ height: '50vh', width: '100vw' }}>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        render={render}
      >
        <div>Map</div>
        <MapRenderer center={{ lat: 41.850033, lng: -87.6500523 }} zoom={10}>
          {mapMarkers.map((marker: MapMarkerType) => {
            const { id, lat, lng } = marker
            return <Marker key={id} position={{ lat, lng }} />
          })}
        </MapRenderer>
      </Wrapper>
    </div>
  )
}
