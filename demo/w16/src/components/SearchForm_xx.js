import React, {useEffect, useRef} from 'react';
import { useGlobalContext } from '../context_xx';

const SearchForm_xx = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef(''); //不會更動值

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    searchValue.current.focus();
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label
          ><input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm_xx;
