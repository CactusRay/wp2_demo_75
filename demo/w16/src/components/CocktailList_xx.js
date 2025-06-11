import React from 'react';
import Cocktail_xx from './Cocktail_xx';
import Loading from './Loading_xx';
import { useGlobalContext } from '../context_xx';

const CocktailList_xx = () => {
  const {loading, cocktails} = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  console.log('1324141',cocktails);
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails match your search
      </h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item)=>{
          return <Cocktail_xx key={item.id} {...item}/>
        })}

      </div>
    </section>
  );
};

export default CocktailList_xx;
