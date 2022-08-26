import { Navbar } from "../../ui/components/navbar";
import { Marvel , Dc , Search } from "../pages";
import { Routes , Route, Navigate } from "react-router-dom";
import { HeroDetail } from "../pages/herodetail";

export const Heroroute = () => {
    return(
    <>
    <Navbar/>
    <Routes>
      <Route path="marvel" element={<Marvel />}></Route>
      <Route path="dc" element={<Dc />}></Route>
      <Route path="search" element={<Search />}></Route>
      <Route path="detail/:hid" element={<HeroDetail/>}></Route>
      <Route path="/" element={<Navigate to='marvel'/>}></Route>
    </Routes>
    </>
    )
}