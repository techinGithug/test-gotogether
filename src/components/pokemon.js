import React, { useState, useEffect } from 'react';
import Placeholder from '../components/placeholder';
import ListItem from '../components/listItem';
import PokemonModel from '../models/pokemon';
import axios from 'axios';

const Pokemon = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dataList, setDataList] = useState([]);

    // https://pokeapi.co/api/v2/pokemon/?offset=0&limit=104
    // https://pokeapi.co/api/v2/pokemon/${i}

    useEffect(() => {
        if(!isLoaded) {
            init();
            setIsLoaded(true);
        }
    });

    const init = async () => {
        for(let i = 1; i <= 104; i++) {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(res => {
                    // console.log(res.data)
                    const { id, name } = res.data
                    let list = [];
                    list.push({
                        pokemonItem: new PokemonModel(
                            id,
                            name,
                            res.data.sprites.front_default
                        )
                    });
                    setDataList(prevItem => [...prevItem, ...list])
                    setIsLoading(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    };

    return (
        <>
        <div className="text-center fw-bold mb-5 text-uppercase">Test fetch API</div>
        <div className="container bg-light">
            {
                isLoading ? 
                dataList.map((item) => 
                    <div className="d-flex justify-content-around mb-5 bg-light" key={item.pokemonItem.id}>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                        <div className="">
                            <div className="text-center"><img src={item.pokemonItem.image} /></div>
                            <div className="text-center text-capitalize fw-bold bg-dark text-white rounded">{item.pokemonItem.name}</div>
                        </div>
                    </div>
                )
                :
                (<Placeholder />)
            }
        </div>
        </>
    )
};

export default Pokemon;
