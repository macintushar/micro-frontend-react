import './App.css'
import CustomVisual from './CustomVisual';

export default function App() {
  return (
    <>
      <h1>The component below is served from a server running on Bun!</h1>
      <CustomVisual chartData={[]} id={"1"} onClick={() => { }} />
    </>
  )
}
