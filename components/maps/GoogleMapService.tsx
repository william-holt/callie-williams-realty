import { Loader } from '@googlemaps/js-api-loader'

export const GoogleLoader = new Loader({
  // @ts-ignore
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
  version: "weekly",
  libraries: ['core', 'marker', 'maps']
});