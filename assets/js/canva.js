/**
 * INDEX - SEARCH KEYWORDS
 * ======================
 * [MAIN_VARS] - Main variables and initialization
 * [PIXEL_RATIO] - High DPI display handling
 * [CANVAS_INIT] - Canvas setup and initialization
 * [POINTS] - Points creation and management
 * [CANVAS_SETUP] - Canvas configuration for proper rendering
 * [EVENTS] - Event listeners for interactivity
 * [ZOOM] - Zoom level handling
 * [MOUSE] - Mouse movement handling
 * [ANIMATION] - Animation loop and rendering
 * [CIRCLES] - Circle class and drawing functions
 * [TYPING] - Typed.js text animation
 * [SCROLLING] - Scroll behavior management
 */

/**
 * Interactive background animation with connected points and circles
 * Features:
 * - Fixed size canvas that maintains dimensions regardless of browser UI changes
 * - Interactive mouse movement on desktop
 * - Static centered animation on mobile/tablet
 * - Density adjustment based on screen size
 * - Smooth resize handling with debounce
 */
(function() {
    // [MAIN_VARS] - Main variables for canvas and animation control
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
    var zoomLevel = 1;
    var mouseEnabled = false;
    var initialHeight; // Store initial height

    // Capture initial height on first load
    function captureInitialHeight() {
        initialHeight = window.innerHeight;
        // Store the initial height as a CSS variable
        document.documentElement.style.setProperty('--canvas-height', initialHeight + 'px');
    }

    // Initialize the animation
    captureInitialHeight();
    initHeader();
    initAnimation();
    addListeners();

    /**
     * [PIXEL_RATIO] - Calculate pixel ratio considering zoom level for high DPI displays
     */
    function getPixelRatio() {
        return Math.max(window.devicePixelRatio || 1, 1) * zoomLevel;
    }

    /**
     * [CANVAS_INIT] - Initialize the canvas and header elements with fixed dimensions
     */
    function initHeader() {
        width = window.innerWidth;
        height = initialHeight; // Use the captured initial height
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('canvas');
        // Set fixed height once and never change it
        largeHeader.style.height = initialHeight + 'px';

        canvas = document.getElementById('canvas__animation');
        setupCanvas();

        createPoints();
    }

    /**
     * [POINTS] - Create animation points with dynamic density based on screen width
     * Smaller screens get fewer points for better performance
     */
    function createPoints() {
        points = [];
        var density;
        // Adjust point density based on screen size
        if (width <= 480) {
            density = Math.min(20, Math.max(10, Math.floor(width/50))); // Mobile
        } else if (width <= 768) {
            density = Math.min(30, Math.max(15, Math.floor(width/50))); // Tablet
        } else {
            density = Math.min(40, Math.max(20, Math.floor(width/50))); // Desktop
        }

        // Create points grid with random variations
        for(var x = 0; x < width; x = x + width/density) {
            for(var y = 0; y < height; y = y + height/density) {
                var px = x + Math.random()*width/density;
                var py = y + Math.random()*height/density;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // Find 5 closest points for each point
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

        // Create circles for each point
        for(var i in points) {
            var c = new Circle(points[i], 0.5+Math.random()*0.5, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    /**
     * [CANVAS_SETUP] - Configure canvas for proper rendering on high DPI displays
     * Using fixed dimensions based on initial size
     */
    function setupCanvas() {
        const pixelRatio = getPixelRatio();
        const displayWidth = Math.floor(width * pixelRatio);
        const displayHeight = Math.floor(initialHeight * pixelRatio); // Use initial height

        // Set physical dimensions
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        
        // Set display dimensions - keep these fixed
        canvas.style.width = width + 'px';
        canvas.style.height = initialHeight + 'px'; // Use initial height

        // Setup context with high quality settings
        ctx = canvas.getContext('2d', { alpha: true });
        ctx.scale(pixelRatio, pixelRatio);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    /**
     * [MOUSE] - Check if mouse interaction should be enabled based on screen width
     */
    function shouldEnableMouse() {
        return window.innerWidth > 768;
    }

    /**
     * [MOUSE] - Update mouse interaction state based on screen size
     * Disables mouse interaction and centers animation on mobile/tablet
     */
    function updateMouseState() {
        if(shouldEnableMouse() && !('ontouchstart' in window)) {
            mouseEnabled = true;
            window.addEventListener('mousemove', mouseMove);
        } else {
            mouseEnabled = false;
            window.removeEventListener('mousemove', mouseMove);
            // Center the animation when mouse is disabled
            target.x = width/2;
            target.y = height/2;
        }
    }

    /**
     * [EVENTS] - Set up event listeners for interactivity and responsiveness
     */
    function addListeners() {
        // Add mouse movement listener with delay
        if(!('ontouchstart' in window)) {
            setTimeout(() => {
                updateMouseState();
            }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--fade-duration')) * 1000);
        }
        
        window.addEventListener('scroll', scrollCheck);
        
        // Only handle width changes on resize, keep height fixed
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleWidthResize, 250);
        });
        
        // Only handle zoom level changes, not height
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', handleZoom);
        }
    }

    /**
     * [ZOOM] - Handle zoom level changes
     */
    function handleZoom() {
        zoomLevel = window.visualViewport ? window.visualViewport.scale : 1;
        // Only update the canvas setup, not the container height
        setupCanvas();
    }

    /**
     * [MOUSE] - Handle mouse movement and update target position
     */
    function mouseMove(e) {
        if (!mouseEnabled) return;

        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    /**
     * [SCROLLING] - Check scroll position to enable/disable animation
     */
    function scrollCheck() {
        if(document.body.scrollTop > initialHeight) animateHeader = false;
        else animateHeader = true;
    }

    /**
     * [EVENTS] - Handle window width resize only - keep height fixed
     */
    function handleWidthResize() {
        // Only update width, keep height fixed to initial value
        width = window.innerWidth;
        // DO NOT update height
        
        setupCanvas();
        createPoints();
        initAnimation();
        updateMouseState();
        
        target.x = width/2;
        target.y = height/2;
    }

    /**
     * [ANIMATION] - Initialize animation
     * Kills existing tweens and starts new animation cycle
     */
    function initAnimation() {
        // Clear existing animations
        for(var i in points) {
            if(points[i].tween) points[i].tween.kill();
        }
        
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    /**
     * [ANIMATION] - Main animation loop
     * Updates point states and draws connections
     */
    function animate() {
        if(animateHeader) {
            const pixelRatio = getPixelRatio();
            ctx.clearRect(0, 0, width * pixelRatio, initialHeight * pixelRatio);
            
            for(var i in points) {
                // Calculate point activity based on distance from target
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

    /**
     * [ANIMATION] - Animate point movement using TweenLite
     */
    function shiftPoint(p) {
        p.tween = TweenLite.to(p, 1+1*Math.random(), {
            x: p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, 
            ease: Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }
        });
    }

    /**
     * [ANIMATION] - Draw lines between connected points
     */
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(179, 200, 195,'+ p.active+')';
            ctx.lineWidth = 0.5 * getPixelRatio();
            ctx.stroke();
        }
    }

    /**
     * [CIRCLES] - Circle class for creating and drawing point circles
     */
    function Circle(pos,rad,color) {
        var _this = this;

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

    /**
     * [ANIMATION] - Calculate distance between two points
     */
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
})();

/**
 * [TYPING] - Initialize Typed.js animation after DOM content is loaded
 * Creates a typing animation effect for different developer roles
 */
document.addEventListener('DOMContentLoaded', function() {
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

/**
 * [SCROLLING] - This timeout reestablishes the scrollbar after 5 seconds
 */
setTimeout(() => {
    document.body.style.overflow = "auto";
}, 5000);

/**
 * [SCROLLING] - This code establishes the main view when you enter or refresh the page
 */
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};