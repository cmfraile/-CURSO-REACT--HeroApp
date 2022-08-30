import { Routes , Route , Navigate } from "react-router-dom";
import { Herolist } from "../pages/HeroList";
import { HeroDetail } from "../pages/herodetail";
import { Search } from "../pages";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/authcontext";
import { Navbar } from "../../ui/components/navbar";

const privateOutlet = () => {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<Herolist publisher="Marvel Comics" />}></Route>
            <Route path="dc" element={<Herolist publisher="DC Comics" />}></Route>
            <Route path="" element={<Navigate to='marvel'/>}></Route>
            <Route path="detail/:hid" element={ <HeroDetail/> } />
            <Route path="search/:sc" element={ <Search/> } />
        </Routes>
        </>
    )
}

export const PrivateRoute = () => {
    const { sname } = useContext(AuthContext);
    return (sname !== undefined)
    ? privateOutlet()
    : <Navigate to=''/>
}