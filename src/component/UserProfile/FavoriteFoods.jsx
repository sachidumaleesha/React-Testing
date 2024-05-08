import React from 'react'
import PropTypes from 'prop-types'

export const FavoriteFoods = (props) => {
    return(
        <div>
            <b>Favorite Foods:</b>

            <ul>
                {props.foods.map(food => <li key={food.id}>{food.name}</li>)}
            </ul>

            <hr />

            <ul>
                {props.foods.map(food => {
                    return (
                        <li key={food.id}>
                            {food.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}