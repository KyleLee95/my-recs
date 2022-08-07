declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string // this is the line you want
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
    }
  }
  interface Window {
    initMap: () => void
  }
}
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
