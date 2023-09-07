import './styles/next.css';

const Next = ({ words, next }) => {
    if (!words) {
        return;
    }

    return (
        <div className='next-wrapper'>
            <button className='next' onClick={() => next()}>Next</button>
        </div>
    );
}

export default Next;
