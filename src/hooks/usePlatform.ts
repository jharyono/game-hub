import useData from "./useData"
import { Platform } from "./useGames"

// export interface Platform {
//   id: number
//   name: string
//   slug: string
// }

const usePlatform = () => useData<Platform>("/platforms/lists/parents")

export default usePlatform
