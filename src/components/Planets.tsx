import { FC, useEffect, useRef } from "react";


const Planets: FC = () => {
    var planets = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
    var scale = [1, 9, 7, 6, 11, 8, 2, 3, 4, 5, 10]
    var orbitV = [.8, 47.4, 35.0, 29.8, 1.0, 24.1, 13.1, 9.7, 6.8, 5.4, 4.7]
    var moon = {}
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvas = canvasRef.current;

    useEffect(() => {
     const canvas = canvasRef.current;

        if (!canvas) return;

   

      const planetsImage = planets.map((el, i)=>{
            var star = {name:'', img:{src:''}, scale: 0, orbitV: 0};
            star.name = el;
            star.img = new Image();
            star.img.src  = 'https://raw.githubusercontent.com/suekam/canvas-solar-system/master/images/'+source+'.png';
            star.scale = scale[i]; //update later
            star.orbitV = orbitV[i]; //update later
            return star;
          
        });

     let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

     const printImg = (img:HTMLImageElement, x:number, y:number, w:number, h:number) => {
            img.onload = function() {
                ctx.drawImage(img, x, y, w, h);
            }
            ctx.drawImage(img, x, y, w, h);
        }

    const draw = () => {
        
        ctx.clearRect(0, 0, canvasX, canvasY);
    
        ctx.fillStyle = '#181818';
        ctx.fillRect(0, 0, canvasX, canvasY);
    
        ctx.fillStyle = 'rgba(255,255,255,.008)';
        ctx.strokeStyle = 'rgba(89,153,188,0.15)';
        ctx.save();
        ctx.translate(canvasX/2, canvasY/2);
        var pos = 0;
    
        for (var i=0; i<planets.length; i++) {
            ctx.save();
    
            var w = planets[i].img.width * (1/planets[i].scale) * 1/2,
            h = planets[i].img.height * (1/planets[i].scale) * 1/2,
            x = pos - w/2,
            y = 0 - h/2,
            deg = Math.floor(Math.random() * (360 - 0)) + 0;;
    
            var time = new Date();
            ctx.rotate( (((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds()) * planets[i].orbitV/6 );
            // ctx.translate(0, 0);
    
            if (i !== 0 ) {
                ctx.beginPath();
                ctx.arc(0, 0, Math.abs(x) + w/2, 0, Math.PI*2, false); // orbit
    
                ctx.fill();
        // ctx.globalCompositeOperation = 'source-over';
                ctx.stroke();
            }
    
            printImg( planets[i].img, x, y, w, h, ctx );
    
            pos = pos + w/1.5 + 30;
    
            ctx.restore();
    
        }
        ctx.restore();
    
        ctx.save();
    
        window.requestAnimationFrame(draw);
    
    }

    function init() {
        loadPlanets();
        window.requestAnimationFrame(draw);
    }
    
    window.onload = function(){
        init()
    };    

    })
    return (
        <> 
        </>
      );
    };
    
    export default Planets;
    

    
    