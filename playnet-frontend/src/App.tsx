import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiveChat from './components/LiveChat';
interface Props {
  videoSrc: string;
}

const VideoPlayer = ({ videoSrc }: Props) => {
  return (
    <div>VideoPlayer</div>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <LiveChat videoId=''/>
  )
}

export default App
