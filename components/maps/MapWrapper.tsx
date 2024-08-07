import GoogleMap from '@/components/maps/GoogleMap'

export const MapWrapper = ({ address }: any) => {
  return (
    <div className="relative w-full -mt-[350px] pb-12">
      <div className="w-full mt-48">
        <div className="absolute z-0 w-full h-48 bg-ink" />
        <h2 className="relative z-10 w-full max-w-screen-2xl shout text-paper-light mx-auto p-6">
          Where is this property?
        </h2>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6">
          <div className="w-full max-w-screen-2xl min-h-[250px] bg-primary-light mx-auto p-6 rounded-2xl">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  )
}
