import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import PunkList from './components/PunkList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x93DAa264B84bf18dFa1f9324de12c8A834afCf7c&order_direction=asc"
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    getMyNfts()

  }, [])


  return <div className='app'>
    <Header />
    {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>

        )
      }
  </div> 
}

export default App;
