import './styles/control.css';

const Control = ({ words, next }) => {
    if (!words) {
        return;
    }

    return (
        <div className='control-wrapper'>
            <button className='wrong' onClick={() => next(false)}>Wrong</button>
            <button className='correct' onClick={() => next(true)}>Correct</button>
        </div>
    );
}

export default Control;
