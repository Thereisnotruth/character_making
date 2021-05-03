import React, { useRef, useEffect } from 'react'

const defaultImageWidth = 128;
const defaultImageHeight = 163;
let headImageWidth = 256;
let headImageHeight = 326;
let bodyImageWidth = 256;
let bodyImageHeight = 326;

let headXPosition = 0;
let headYPosition = 0;
const initCanvas = () => {
    const can = document.getElementById('can');
    const canvasAvailable = () => {
        if(!can || !can.getContext)
            return false;
        else
            return true;
    }
    if(!canvasAvailable())
        alert('Canvas doesn\'t exist');
    const context = can.getContext('2d');
    const drawDefaultText = () => {
        context.font = '14px serif';
        context.fillText('hello image', 2, 12);
    }
    const drawImage = () => {

        let headSprite = new Image();
        let bodySprite = new Image();
        let frameIdx = 0;
        const spriteFrames = [0, 1, 2, 3, 4, 5, 6, 7,
                              8, 9, 10, 11, 12, 13, 14, 15,
                              16, 17, 18, 19, 20, 21];
        headSprite.src = '/runner_head.png';
        bodySprite.src = '/runner_body.png';
        const startUp = () => {
            setInterval(drawDynamicImage, 100);
        }
        const defaultDraw = () => {
            context.drawImage(headSprite, 0, 0, headImageWidth, headImageHeight, 0, 0, headImageWidth, headImageHeight);
            context.drawImage(bodySprite, 0, 0, bodyImageWidth, bodyImageHeight, 0, 0, bodyImageWidth, bodyImageHeight);
        }

        const drawDynamicImage = () => {
            let spriteX = Math.floor(spriteFrames[frameIdx] % 8) * defaultImageWidth;
            let spriteY = Math.floor(spriteFrames[frameIdx] / 8) * defaultImageHeight;

            context.fillStyle = '#222222';
            context.fillRect(0, 0, 1024, 768);

            context.drawImage(headSprite, spriteX, spriteY, defaultImageWidth, defaultImageHeight, headXPosition, headYPosition, headImageWidth, headImageHeight);
            context.drawImage(bodySprite, spriteX, spriteY, defaultImageWidth, defaultImageHeight, 0, 0, bodyImageWidth, bodyImageHeight);

            frameIdx++;
            if(frameIdx == spriteFrames.length)
                frameIdx = 0;
        }
        
        const eventSpriteLoaded = () => {
            defaultDraw();
            startUp();
        }
        headSprite.addEventListener('load', eventSpriteLoaded, false);
        bodySprite.addEventListener('load', eventSpriteLoaded, false);
    }
    drawDefaultText();
    drawImage();
}

const eventWindowLoaded = () => {
    initCanvas();
}

const sizeUp = () => {
    headImageWidth += 10;
    headXPosition -= 5;
    headYPosition -= 2.5;
    headImageHeight += 10;

    console.log(bodyImageHeight);
}
const sizeDown = () => {
    headImageWidth -= 10;
    headXPosition += 5;
    headYPosition += 2.5;
    headImageHeight -= 10;
}
const Canvas = (props) => {
    window.addEventListener('load', eventWindowLoaded, false);
    return (
        <div id='canvas'>
            <canvas id='can' width='256' height='326'>

            </canvas>
            
            <input type='button' value='increase' onClick={sizeUp}></input>
            <input type='button' value='decrease' onClick={sizeDown}></input>
        </div>
    );
};

export default Canvas;