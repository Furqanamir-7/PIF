import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MAP_LOCATIONS } from '../data/constants'

const creamIcon = L.divIcon({
  className: 'pif-map-marker',
  html: '<div style="width:14px;height:14px;border-radius:9999px;border:2px solid #F4F0E6;background:rgba(244,240,230,0.85);box-shadow:0 0 12px rgba(244,240,230,0.45);"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
})

function MapStyleFilter() {
  const map = useMap()

  useEffect(() => {
    const container = map.getContainer()
    container.style.filter = 'hue-rotate(80deg) brightness(0.55) saturate(0.7)'
    return () => {
      container.style.filter = ''
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
        <MapStyleFilter />
        {MAP_LOCATIONS.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]} icon={creamIcon}>
            <Popup>
              <div className="min-w-[180px] rounded-lg border border-[#F4F0E6] bg-[#1E3322] p-3 text-[#F4F0E6]">
                <p className="text-[10px] font-semibold tracking-widest">{location.category}</p>
                <p className="mt-1 text-sm">{location.name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
