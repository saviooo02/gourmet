import { useState } from 'react';
import RecipeInput from './RecipeInput';
import RecipeOutput from './RecipeOutput';

const RecipeContainer = () => {
    const [recipe, setRecipe] = useState("");

    return (
        <div className="bg-slate-100 flex flex-col lg:flex-row gap-4 mx-auto p-6 max-w-screen-lg">
            <div className="flex-1">
                <RecipeInput setRecipe={setRecipe} />
            </div>
            <div className="flex-1">
                <RecipeOutput recipe={recipe} />
            </div>
        </div>
    );
};

export default RecipeContainer;

