import React from 'react'

const Controller = (props) => {
    return(
        <div className='controller'>
           <div className='arm_controller'>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={props.arm}
                    onChange={(event) => {
                        props.armControl(event.target.valueAsNumber);
                    }}
                />
                <div>팔 크기 : {props.arm}</div> 
            </div>
            <div className='head_controller'>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={props.head}
                    onChange={(event) => {
                        props.headControl(event.target.valueAsNumber);
                    }}
                />
                <div>머리 크기 : {props.head}</div> 
            </div>
        </div>
    );
};

export default Controller;