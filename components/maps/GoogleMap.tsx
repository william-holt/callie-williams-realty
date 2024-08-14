'use client'
import { GoogleLoader } from './GoogleMapService'

let map: google.maps.Map;

export default function GoogleMap() {

  GoogleLoader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 32.5997286994614, lng: -85.54151421831044 },
      zoom: 13,
    });
  });

  return <div id="map" className="h-fit min-h-[600px] rounded-2xl"></div>
}
