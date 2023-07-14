import './style.css';
import { useRef, useEffect } from 'react';
interface PropsType {
    width: number;
    height: number;
    borderWidth: number
}
const AppCanvas = ({width =200 ,height=200, borderWidth}:PropsType)=> {
    const canvas = useRef<HTMLCanvasElement>(null)
    const onLoadPage = ()=>{
        if (canvas.current){
            if( width >= 200 && height >= 200){
                canvas.current.height = height
                canvas.current.width = width
            }else{
                canvas.current.height = height
                canvas.current.width = width                
                console.error('Height or width has to be at least 200px.')
            }
        } 
        const c = canvas.current?.getContext('2d');
        
        c?.fillRect(0,0,width,borderWidth) 
        c?.fillRect(width-borderWidth,0,borderWidth,height) 
        c?.fillRect(0,height-borderWidth,width,height) 
        c?.fillRect(0,0,borderWidth,height) 
    }
    useEffect(onLoadPage, [height, width, borderWidth])
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <canvas ref={canvas}></canvas>
        </div>
    )
}

export default AppCanvas;