import RecipeInput from './RecipeInput';
import RecipeOutput from './RecipeOutput';

const RecipeContainer = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 mx-auto p-6 max-w-screen-lg">
            <div className="flex-1">
                <RecipeInput />
            </div>
            <div className="flex-1">
                <RecipeOutput />
            </div>
        </div>
    );
};

export default RecipeContainer;
