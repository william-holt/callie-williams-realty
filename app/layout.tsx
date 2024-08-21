import './globals.css'

import Analytics from '@/components/utils/Analytics'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-secondary-dark">
      <Analytics></Analytics>
      <body>{children}</body>
    </html>
  )
}
