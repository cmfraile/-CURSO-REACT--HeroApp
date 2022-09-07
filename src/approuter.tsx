import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import { PrivateRoute , PublicRoute } from './auth/routes/scopeRoute';
import { Heroroute } from './heroes/routes/heroroute';
import { HeroDetail } from './heroes/pages/herodetail';
import { Login } from './auth/pages/login';
import { Search } from './heroes/pages';

export const AppRouter = () => {
    return(
      <Routes>
          <Route path='' element={ <PublicRoute><Login/></PublicRoute> } />
          <Route path="*" element={ <PublicRoute><Navigate to=''/></PublicRoute> } />
          <Route path='hero/*' element={<PrivateRoute><Heroroute/></PrivateRoute>}/>
          <Route path="detail/:hid" element={ <PrivateRoute><HeroDetail/></PrivateRoute> } />
          <Route path="search/:sc" element={ <PrivateRoute><Search/></PrivateRoute> } />
      </Routes>
    )
};