import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div 
            className="Counter" 
            onClick={() => onIncrement(index)} 
            //우클릭 시 메뉴가 열리는 이벤트 : 이 함수가 실행 될 때, e.preventDefaul()를 실행하면 메뉴가 열리지 않음
            onContextMenu={
                (e) => { 
                    e.preventDefault(); 
                    onDecrement(index);
                }
            } 
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;