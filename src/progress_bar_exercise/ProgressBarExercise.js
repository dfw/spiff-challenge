import React, { useState, useRef } from 'react';
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

const animationClasses = ['start-animation', 'finish-animation', 'fade-out'];

const removeAnimationClasses = (el) => {
    animationClasses.forEach((c) => {
        el.classList.remove(c);
    });
};

const Solution = () => {
    const [requestInProgress, setRequestInProgress] = useState(false);
    const [fadeOutProgressBarTimeoutId, setFadeOutProgressBarTimeoutId] =
        useState();
    const ref = useRef();

    const handleStartRequest = () => {
        // Do nothing if request has been started
        if (requestInProgress) {
            return;
        }

        if (fadeOutProgressBarTimeoutId) {
            clearTimeout(fadeOutProgressBarTimeoutId);
        }

        removeAnimationClasses(ref.current);

        setRequestInProgress(true);

        ref.current.classList.add('start-animation');
    };

    const handleFinishRequest = () => {
        // Do nothing if request has not been started
        if (!requestInProgress) {
            return;
        }

        ref.current.classList.add('finish-animation');

        // Reset request
        setTimeout(() => {
            setRequestInProgress(false);
        }, 1000);

        // Fade out progress bar
        const timeoutId = setTimeout(() => {
            ref.current.classList.add('fade-out');
        }, 4000);

        setFadeOutProgressBarTimeoutId(timeoutId);
    };

    return (
        <>
            <div ref={ref} className="progress-bar">
                <div className="remaining-progress"></div>
            </div>
            <div className="button-group">
                <button
                    onClick={handleStartRequest}
                    className="button semi-bold small green"
                >
                    {requestInProgress ? 'Loading...' : 'Start Request'}
                </button>
                <button
                    onClick={handleFinishRequest}
                    className="button semi-bold small red"
                >
                    Finish Request
                </button>
            </div>
        </>
    );
};
