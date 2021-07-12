import React from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
    return ( <
        > {
            createArray(totalStars).map((n, i) => ( <
                Star key = { i }
                selected = { true }
                />
            ))
        } <
        p > { totalStars } < /p> <
        />
    );
}

const Star = ({ selected = false }) => ( <
    FaStar color = { selected ? 'red' : 'grey' }
    />
);