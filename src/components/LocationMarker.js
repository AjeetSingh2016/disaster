import {Icon} from '@iconify/react'
import locationMarker from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, long, onClick }) => {
  return (
    <div onClick={onClick} style={{fontSize:"2rem",color:"red" }}>
        <Icon icon={locationMarker} />
        
    </div>
  )
}

export default LocationMarker