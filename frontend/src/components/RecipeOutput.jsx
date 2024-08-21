import React from 'react';
import PropTypes from 'prop-types';

const RecipeOutput = ({ recipe }) => {
    return (
        <div className="p-6 bg-slate-100 shadow-md rounded-md flex flex-col items-center custom-max-h" style={{ maxHeight: '397px', overflowY: 'auto' }}>
            <h2 className="text-xl font-bold text-slate-600 text-center">Generated Recipe:</h2>
            <p className="text-sm text-slate-600 mt-2 text-center">
                {recipe.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

RecipeOutput.propTypes = {
    recipe: PropTypes.string.isRequired,
};

export default RecipeOutput;





