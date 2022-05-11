import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import PunkList from './components/PunkList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x93DAa264B84bf18dFa1f9324de12c8A834afCf7c'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    getMyNfts()

  }, [])


  return <div className='app'>
    <Header />
    <Main />
    <PunkList punkListData={punkListData} />
  </div> 
}

export default App;
