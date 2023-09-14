import './styles/control.css';

const Control = ({ words, next }) => {
    if (!words) {
        return;
    }

    return (
        <div className='next-wrapper'>
            <button className='next' onClick={() => next()}>Next</button>
        </div>
    );
}

export default Control;
