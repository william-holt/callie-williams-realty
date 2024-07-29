"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

const Analytics = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />
  )
}

export default Analytics;