'use client'
import { useEffect} from 'react'

import { GoogleLoader } from '@/components/maps/GoogleMapService'

export default function GoogleMap() {
  console.log(134, GoogleLoader)
  useEffect(() => {
    GoogleLoader.importLibrary('maps')
      .then(({Map}) => {
        console.log("Map: ", Map)
        // @ts-ignore
        new Map(document.getElementById("map2"));
      })
      .catch(e => {
        console.log("error: ", e)
      })
  }, []);

  return (
    <div id="map2" className="h-[200px] rounded-2xl"></div>
  )
}