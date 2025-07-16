document.addEventListener('DOMContentLoaded', function() {
    // Initialize the gradient
    var gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
    
    // Prevent the waves from disappearing
    if (gradient.uniforms && gradient.uniforms.u_global) {
        gradient.uniforms.u_global.value.noiseSpeed.value = 10e-6;
    }
    
    if (gradient.uniforms && gradient.uniforms.u_vertDeform) {
        gradient.uniforms.u_vertDeform.value.noiseFlow.value = 5;
    }
    
    // For wave layers - ensure they have staggered parameters
    if (gradient.uniforms && gradient.uniforms.u_waveLayers && gradient.uniforms.u_waveLayers.value) {
        gradient.activeColors = [1, 1, 1, 1];
        
        for (let i = 0; i < gradient.uniforms.u_waveLayers.value.length; i++) {
            if (gradient.uniforms.u_waveLayers.value[i] && gradient.uniforms.u_waveLayers.value[i].value) {
                gradient.uniforms.u_waveLayers.value[i].value.noiseFloor.value = 0.01;
                gradient.uniforms.u_waveLayers.value[i].value.noiseCeil.value = 0.8;
                gradient.uniforms.u_waveLayers.value[i].value.noiseSeed.value += i * 50;
            }
        }
    }
});