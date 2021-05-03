import React from 'react'
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: 'Build/Hi.loader.js',
    dataUrl: 'Build/Hi.data',
    frameworkUrl: 'Build/Hi.framework.js',
    codeUrl: 'Build/Hi.wasm'
});

unityContext.on('canvas', (canvas) => {
    canvas.width = 320;
    canvas.height = 240;
});
const sizeUp = () => {
    unityContext.send('TestChar', 'SizeUp');
}
const sizeDown = () => {

}
const Hi = (props) => {
    
    return(
        <>
        <div width='320' height='240'>
            <Unity 
                unityContext={unityContext}
                matchWebGLToCanvasSize={false}
            />    
        </div>
        <input type='button' value='increase' onClick={sizeUp}></input>
        <input type='button' value='decrease' onClick={sizeDown}></input>
        </>
    );
};

export default Hi;