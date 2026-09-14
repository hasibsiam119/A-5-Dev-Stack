import { Suspense } from "react"
import { Footer } from "./components/footer"
import Hero from "./components/hero"
import Nav from "./components/nav"
import type { Itechnology } from "./type/type"
import Technologies from "./components/technologies"

const technologyDataPromise = async (): Promise<Itechnology[]> => {
  const res = await fetch("./../public/data.json")
  const data = await res.json()
  return data
}

function App() {


  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback="Loading...">
        <Technologies technologyDataPromise={technologyDataPromise()} ></Technologies>
      </Suspense>


      <Footer></Footer>
    </>
  )
}

export default App
