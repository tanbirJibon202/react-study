import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart';
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart';

const PricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>

      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultsChart></ResultsChart>
      </main>
    </>
  )
}

export default App
