(function() { //Animación canvas
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
    var zoomLevel = 1;
    var mouseEnabled = false;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function getPixelRatio() {
        // Obtener el pixel ratio real considerando el zoom
        return Math.max(window.devicePixelRatio || 1, 1) * zoomLevel;
    }

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight * 1;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('canvas');
        largeHeader.style.height = height + 'px';

        canvas = document.getElementById('canvas__animation');
        setupCanvas(); // Nueva función para configurar el canvas

        // create points with higher density
        points = [];
        var density = Math.min(40, Math.max(20, Math.floor(width/50))); // Aumentada la densidad
        for(var x = 0; x < width; x = x + width/density) {
            for(var y = 0; y < height; y = y + height/density) {
                var px = x + Math.random()*width/density;
                var py = y + Math.random()*height/density;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 0.5+Math.random()*0.5, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    function setupCanvas() {
        const pixelRatio = getPixelRatio();
        const displayWidth = Math.floor(width * pixelRatio);
        const displayHeight = Math.floor(height * pixelRatio);

        // Establecer las dimensiones reales del canvas (en píxeles)
        canvas.width = displayWidth;
        canvas.height = displayHeight;

        // Establecer las dimensiones de visualización del canvas (en CSS)
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        // Configurar el contexto
        ctx = canvas.getContext('2d', { alpha: true });
        ctx.scale(pixelRatio, pixelRatio);
        
        // Aplicar configuraciones de calidad
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Configurar líneas para mayor nitidez
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            // Retrasar la activación del evento mousemove
            setTimeout(() => {
                mouseEnabled = true;
                window.addEventListener('mousemove', mouseMove);
            }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fade-duration')) * 1000);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
        
        // Detectar cambios de zoom
        window.visualViewport.addEventListener('resize', handleZoom);
    }

    function handleZoom() {
        zoomLevel = window.visualViewport.scale;
        setupCanvas();
    }

    function mouseMove(e) {
        if (!mouseEnabled) return; // Si el mouse no está habilitado, no hacer nada

        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight * 1;
        largeHeader.style.height = height+'px';
        setupCanvas();
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            const pixelRatio = getPixelRatio();
            ctx.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
            
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {
            x: p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, 
            ease: Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }
        });
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(179, 200, 195,'+ p.active+')';
            ctx.lineWidth = 0.5 * getPixelRatio(); // Ajustar el grosor de línea según el zoom
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius * getPixelRatio(), 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
})();

document.addEventListener('DOMContentLoaded', function() { //Animación de letras
    const fadeDuration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fade-duration')) * 1000;
        setTimeout(() => {
        var typed = new Typed(".typing", {
            strings: ["Mobile App Developer", "BackEnd Developer", "Java Developer", "FrontEnd Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|'
        });
    }, fadeDuration);
});