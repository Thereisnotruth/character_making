import React, { useState } from 'react';

import { Canvas, Controller } from '../components';

const Board = () => {
    const [arm, setArm] = useState(50);
    const [head, setHead] = useState(50);

    const modifyArmSize = (value) => {
        setArm(value);
    };
    const modifyHeadSize = (value) => {
        setHead(value);
    };
    return(
        <div className="board">
            <Canvas 
                arm={arm}
                head={head}
            />
            
            <Controller 
                arm={arm}
                armControl={modifyArmSize}
                head={head}
                headControl={modifyHeadSize}
            />
           
        </div>
    );
};

export default Board;