import React, { useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'
import { createContext } from 'react';
export const AssetContext = createContext('');
export const MoneyContext = createContext(0);
const FamilyTree = () => {
  const asset = 'diamond';
  const newAsset = 'gold'
  const [money, setMoney] = useState(0);

  return (
    <div className='family-tree'>
      <h2>Family Tree</h2>
      <h4>Total Family Money: {money}</h4>
      {/* <Grandpa asset={asset}></Grandpa> */}
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
/* 
  1. create a context using createContext with a default value
     make sure you export the context to be used in other files
*/