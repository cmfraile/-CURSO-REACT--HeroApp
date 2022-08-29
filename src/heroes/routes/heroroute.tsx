import { Navbar } from "../../ui/components/navbar";
import { Routes , Route, Navigate } from "react-router-dom";
import { Herolist } from "../pages/HeroList";

export const Heroroute = () => {
    return(
    <>
    <Navbar/>
    <Routes>
      <Route path="marvel" element={<Herolist publisher="Marvel Comics" />}></Route>
      <Route path="dc" element={<Herolist publisher="DC Comics" />}></Route>
      <Route path="" element={<Navigate to='marvel'/>}></Route>
    </Routes>
    </>
    )
}