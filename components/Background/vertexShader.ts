const vertexShader = `
varying vec2 vUv;
float PI = 3.141592653589793238;
  void main() {
 
    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 8.0 / -mvPosition.z;
  }`;
export default vertexShader;
