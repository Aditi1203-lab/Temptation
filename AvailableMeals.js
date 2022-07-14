import React from 'react'
import Cards from './Cards';
import MealItem from './MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
export default function AvailableMeals() {
  return (
    <section>
        <Cards>
        <ul className='ul_it'>
             {/* Here name,description,price here is passed as props as in MealItem.js we are accessing them via props only */}
            {DUMMY_MEALS.map(meal=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)}
        </ul>
        </Cards>
    </section>
  )
}
