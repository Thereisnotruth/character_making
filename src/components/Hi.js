import React from 'react'
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
    loaderUrl: 'Build/Hi.loader.js',
    dataUrl: 'Build/Hi.data',
    frameworkUrl: 'Build/Hi.framework.js',
    codeUrl: 'Build/Hi.wasm'
});

unityContext.on('canvas', (canvas) => {
    canvas.width = 720;
    canvas.height = 480;
});
const sizeUp = () => {
    unityContext.send('TestChar', 'SizeUp');
}
const sizeDown = () => {

}
const Hi = (props) => {
    
    return(
        <>
        <Unity 
            unityContext={unityContext}
            matchWebGLToCanvasSize={false}
        />    
        <input type='button' value='increase' onClick={sizeUp}></input>
        <input type='button' value='decrease' onClick={sizeDown}></input>
        </>
    );
};

export default Hi;