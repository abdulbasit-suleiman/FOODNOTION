import { Inter } from 'next/font/google'
import ViewPage from './view'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<ViewPage/>
    </div>
  )
}
