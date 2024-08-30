import PropTypes from 'prop-types';
import { useState } from 'react';

const RecipeInput = ({ setRecipe }) => {
    const [formdata, setFormdata] = useState({ ingredients: "", time: "", cuisine: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://gourmet-server.vercel.app/recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formdata),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            

            if (typeof data.recipe === 'string') {
                setRecipe(data.recipe); 
            } else {
                console.error('Unexpected response format:', data);
                setRecipe('No recipe generated.');
            }
        } catch (error) {
            console.error('Error:', error);
            setRecipe('Error generating recipe.');
        }
    };

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-slate-100 shadow-md rounded-md flex flex-col gap-4">
            <label htmlFor="ingredients" className="block text-sm font-medium text-slate-500">Ingredients:</label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.ingredients}
                name="ingredients"
                required
                placeholder="Enter Ingredients"
                className="mt-1 p-2 w-full border border-slate-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <label htmlFor="time" className="block text-sm font-medium text-slate-500">Time:</label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.time}
                name="time"
                required
                placeholder="Enter time in minutes"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <label htmlFor="cuisine" className="block text-sm font-medium text-slate-500">Cuisine:</label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.cuisine}
                name="cuisine"
                required
                placeholder="Enter type of cuisine"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <button type="submit" className="mt-4 py-2 px-4 bg-slate-600 text-white font-semibold rounded-md hover:bg-slate-700 transition">
                Generate
            </button>
        </form>
    );
};

RecipeInput.propTypes = {
    setRecipe: PropTypes.func.isRequired
};

export default RecipeInput;

