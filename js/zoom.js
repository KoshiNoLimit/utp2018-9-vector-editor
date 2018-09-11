/*Скрипт для работы инструмента "Лупа"*/
/*Приближение и отдаление холста*/

'use strict';

const zoom = document.getElementById("zoom");
var scl = document.getElementById("scale-value");
var q = 1;

var f = function(){
    function eventHandler(event){
        if(!zoom.checked) {
            return;
        }
        if(event.wheelDelta > 0 && q < 4.9){
            q += 0.1;

            drawPanel.style.transform = 'scale(' + q + ')';
            svgPanel.style.height = drawPanel.style.height;
            svgPanel.style.width = drawPanel.style.width;
        }else{
            if(q < 0.3){
                return;
            }
            q -= 0.1; 

            drawPanel.style.transform = 'scale(' + q + ')';
            svgPanel.style.height = drawPanel.style.height;
            svgPanel.style.width = drawPanel.style.width;
        }
        scl.textContent = q.toFixed(1);
        event.preventDefault();
    }
    drawPanel.addEventListener('mousewheel', eventHandler, false);
};

window.addEventListener('load',f,false);