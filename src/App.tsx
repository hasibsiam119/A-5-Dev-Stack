import { Suspense, useState } from "react"
import { Footer } from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/nav"
import type { Itechnology } from "./type/type"
import Technologies from "./components/technologies"
import { ToastContainer } from "react-toastify"

const technologyDataPromise = async (): Promise<Itechnology[]> => {
  const res = await fetch("./../public/data.json")
  const data = await res.json()
  return data
}

function App() {
const [added, setAdded] = useState<Itechnology[]>([]);


  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback="Loading...">
        <Technologies technologyDataPromise={technologyDataPromise()} added={added} setAdded={setAdded}></Technologies>
      </Suspense>


      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
