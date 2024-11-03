import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Memories } from "./pages/Memories"
import { Booking } from "./pages/Booking"
import { Header } from "./components/Header"

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App