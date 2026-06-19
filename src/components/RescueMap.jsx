import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MAP_LOCATIONS } from '../data/constants'

const creamIcon = L.divIcon({
  className: 'pif-map-marker-wrap',
  html: `<div class="pif-marker"><span class="pif-marker-ring"></span><span class="pif-marker-core"></span></div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
})

function MapTint() {
  const map = useMap()

  useEffect(() => {
    const tilePane = map.getPane('tilePane')
    if (tilePane) {
      tilePane.style.filter = 'brightness(0.62) saturate(0.35) sepia(0.35) hue-rotate(65deg)'
    }
    return () => {
      if (tilePane) tilePane.style.filter = ''
    }
  }, [map])

  return null
}

export default function RescueMap() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-pif-cream/30 bg-pif-deep md:h-[520px]">
        <p className="text-sm text-pif-cream/60">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-pif-cream/40 shadow-xl">
      <MapContainer
        center={[31.5497, 74.3436]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-[420px] w-full md:h-[520px]"
        aria-label="Rescue locations map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <MapTint />
        {MAP_LOCATIONS.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]} icon={creamIcon}>
            <Popup className="pif-map-popup" closeButton={false} minWidth={200}>
              <div className="pif-popup-card">
                <p className="pif-popup-label">{location.category}</p>
                <p className="pif-popup-title">{location.name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
