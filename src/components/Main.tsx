// src/components/Main.tsx

import { Routes, Route } from 'react-router-dom';

import Cards from './Cards';
import Home from './Home';
import PoemOne from './PoemOne';
import PoemTwo from './PoemTwo';
import Contents from './Contents';
import PoemThree from './PoemThree';
import PoemFour from './PoemFour';
import Bts from './Bts';

export default function Main() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cards' element={<Cards />} />
                <Route path='/contents' element={<Contents />} />

                <Route path='/poem1' element={<PoemOne />} />
                <Route path='/poem2' element={<PoemTwo />} />
                <Route path='/poem3' element={<PoemThree />} />
                <Route path='/poem4' element={<PoemFour />} />

                <Route path='/bts' element={<Bts />} />
            </Routes>
        </>
    );
}