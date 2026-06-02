import React from 'react';
import { Link } from "react-router-dom";
import dashboard from '../assets/Dashboard-Image.png';
import coke from '../assets/login-template1.png';
export const products = {
drinks: [
    {
        id: 1,
        name: "Coca Cola",
        
        price: 150,
        unit:"ml",
        size:500, 
        image:dashboard
                        
    },
    {
        id: 2,
        name: "Pepsi",
        price: 150,
        unit:"ml",
        size:500,
        image: coke
    },
        {
        id: 3,
        name: "Fanta",
        price: 150,
        unit:"ml",
        size:500,
        image: coke
    },
        {
        id: 4,
        name: "Sprite",
        price: 150, 
        unit:"ml",
        size:500,
        image: coke
        },
        {
        id: 5,
        name: "Mirinda",
        price: 150,
        unit:"ml",
        size:500,
        image: coke
        }

],
flour: [
    {
        id: 1,
        name: "Maize Flour",
        price: 200,
        unit:"kg",
        size:1,
        image: "/path/to/maize-flour.jpg"   
    },
    {
        id: 2,
        name: "Wheat Flour",
        price: 250,
        unit:"kg",
        size:1,
        image: "/path/to/wheat-flour.jpg"
    }
    ],
liquor: [
    {id: 1,
    name: "Whiskey",
    price: 1500,
    unit:"ml",
    size:750,
    image: "/path/to/whiskey.jpg"
    },
],

};

