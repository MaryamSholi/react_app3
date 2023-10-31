import React, { useState, useEffect } from 'react'
import RestaurantItems from '../restaurantItems/RestaurantItems.jsx'
import './Restaurant.css'
export default function Restaurant() {
    let [pizza, setPizza] = useState([]);
    let [salad, setSalad] = useState([]);
    let [onion, setOnion] = useState([]);


    const getPizza = async () => {
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data = await reponse.json();
        let dataparse = data.recipes;
        console.log(dataparse);
        setPizza(dataparse);
    }
    const getSalad = async () => {
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data = await reponse.json();
        let dataparse = data.recipes;
        console.log(dataparse);
        setSalad(dataparse);
    }
    const getOnion = async () => {
        let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data = await reponse.json();
        let dataparse = data.recipes;
        console.log(dataparse);
        setOnion(dataparse);
    }

    useEffect(() => {
        getPizza();
        getSalad();
        getOnion();
    }, [])

    return (
        <>
            <div className='pizza pt-5 '>
                <div className='container py-5'>
                    <h2 className='text-center py-2 text-white  addr'>Pizza</h2>
                    <div className='row row-gap-4 pt-5'>
                        {
                            pizza.map((piza) => {
                                return <RestaurantItems {...piza} key={piza.recipe_id} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='salad '>
                <div className='container py-5'>
                    <h2 className='text-center py-2 text-white  addr '>Salad</h2>
                    <div className='row row-gap-3 pt-5'>
                        {
                            salad.map((sald) => {
                                return <RestaurantItems {...sald} key={sald.recipe_id} />
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='Onion'>
                <div className='container py-5'>
                    <h2 className='text-center py-2 text-white  addr '>Onion</h2>
                    <div className='row row-gap-3 pt-5 '>
                        {
                            onion.map((oni) => {
                                return <RestaurantItems {...oni} key={oni.recipe_id} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>




    )
}
