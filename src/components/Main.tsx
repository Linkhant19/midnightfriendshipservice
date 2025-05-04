// src/components/Main.tsx

import Styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Cards from './Cards';
import Home from './Home';

export default function Main() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cards' element={<Cards />} />
            </Routes>
        </>
    );
}