import React, { ReactNode } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

interface GoogleMapAPIWrapperProps {
  children: ReactNode
}

export const GoogleMapsAPIWrapper: React.FC<GoogleMapAPIWrapperProps> = ({
  children
}) => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }
  return (
    <Wrapper apiKey={''} render={render}>
      {children}
    </Wrapper>
  )
}
