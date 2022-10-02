import React, {useState} from 'react';
import './App.css';
import DropsPage from './CollectionsDrops/DropsPage.jsx';
import DropPage from './CollectionsDrops/droppage/DropPage';
import CreateMainPage from './Create/CreateMainPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import NftDrop from './Create/CollectionDropPage/NftDrop';
import MainPage from './MainPage/MainPage';
import TokensPage from './TokensDrops/DropsPage';
import LaunchpadPage from './LaunchpadPage/LaunchpadPage';
import TokenDropPage from './TokensDrops/SalePage/DropPage';

function App() {
  return(
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/drops' element={<div className="App">
                                                <DropsPage/>
                                            </div>} />
              <Route path='/tokens' element={<TokensPage />} />
              <Route path='/launchpad' element={<LaunchpadPage />} />
              <Route path="drop/:id" element={<DropPage />} />
              <Route path="tokensale/:id" element={<TokenDropPage />} />
              <Route path="create/" element={<CreateMainPage />} />
              <Route path='create/:id' element={<CreateMainPage />} />
              <Route path='create/:id/ndrops' element={<NftDrop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
    }


export default App;
