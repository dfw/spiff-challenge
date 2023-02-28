import React from 'react';
import Exercise from '../exercise/Exercise';

const ProgressBarExercise = () => {
    return (
        <div className="progress-bar-exercise">
            <Exercise
                solution={<Solution />}
                specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
                title="Progress Bar Exercise"
            />
        </div>
    );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
    return (
        <>
            <div className="progress-bar">
                <div className="remaining-progress"></div>
            </div>
            <div className="button-group">
                <button className="button semi-bold small green">
                    Start Request
                </button>
                <button className="button semi-bold small red">
                    Finish Request
                </button>
            </div>
        </>
    );
};
