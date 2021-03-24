import React, { useRef, useEffect } from 'react'
import Paper  from 'paper';

import { DrawArms, DrawHead } from '../paints';

const Canvas = (props) => {

    useEffect(() => {
        Paper.setup(document.getElementById('my_canvas'));
        DrawArms(props.arm);
        DrawHead(props.head);
    });

    return <canvas  className='canvas' id='my_canvas' />;
};

export default Canvas;