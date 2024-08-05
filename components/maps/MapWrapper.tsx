import GoogleMap from '@/components/maps/GoogleMap'


export const MapWrapper = ({address}: any) => {
  return (
    <div className="m-2 p-2 b-2 border-white rounded-2xl bg-blue-300">
      <GoogleMap />
    </div>
  )
}