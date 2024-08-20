import { useState } from "react";

const RecipeInput = () => {
    const [formdata, setFormdata] = useState({ ingredients: "", time: "", cuisine: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
    };

    const handleUpdate = (e) => {
        const changedField = e.target.name;
        const changedValue = e.target.value;
        setFormdata((currData) => {
            currData[changedField] = changedValue;
            return { ...currData };
        });
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="max-w-lg mx-auto p-6 bg-slate-100 shadow-md rounded-md flex flex-col gap-4"
        >
            <label 
                htmlFor="ingredients" 
                className="block text-sm font-medium text-slate-500"
            >
                Ingredients:
            </label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.ingredients}
                name="ingredients"
                placeholder="Enter Ingredients"
                className="mt-1 p-2 w-full border border-slate-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <label 
                htmlFor="time" 
                className="block text-sm font-medium text-slate-500"
            >
                Time:
            </label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.time}
                name="time"
                placeholder="Enter time"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <label 
                htmlFor="cuisine" 
                className="block text-sm font-medium text-slate-500"
            >
                Cuisine:
            </label>
            <input 
                type="text"
                onChange={handleUpdate}
                value={formdata.cuisine}
                name="cuisine"
                placeholder="Enter cuisine"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
            />

            <button 
                type="submit" 
                className="mt-4 py-2 px-4 bg-slate-600 text-white font-semibold rounded-md hover:bg-slate-700 transition"
            >
                Generate
            </button>
        </form>
    );
};

export default RecipeInput;

