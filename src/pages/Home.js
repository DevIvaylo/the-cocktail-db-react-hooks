import React, {useEffect, useState} from 'react';
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('m');
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        setLoading(true);

        async function getDrinks() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                const data = await response.json();
                const {drinks} = data;
                if (drinks) {
                    const newCocktails = drinks.map(item => {
                        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                    });
                    setCocktails(newCocktails);
                } else {
                    setCocktails([])
                }
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }

        getDrinks();
    }, [searchTerm]);
    return (
        <>
            <SearchForm setSearchTerm={setSearchTerm}/>
            <CocktailList loading={loading} cocktails={cocktails}/>
        </>
    )
};

export default Home;
