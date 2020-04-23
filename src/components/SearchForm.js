import React, {useEffect, useRef} from 'react';

const SearchForm = ({setSearchTerm}) => {

    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    };

    return (
        <section className='section'>
            <h2 className="section-title">search cocktails</h2>
            <form action="" className='form search-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input placeholder='e.g. Margarita' id='name' name='name' type="text" ref={searchValue}
                           onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    )
};

export default SearchForm;
