const fragmentShader = `
// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default
precision mediump float;

uniform float u_time;
uniform sampler2D u_displacement;

varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

mat2 rotate2d(float _angle) {
  return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
}

float u_rPhaseMult = 2.211;
float u_gPhaseMult = 0.0;
float u_bPhaseMult = 1.453;
float u_rPhase = 0.6;
float u_gPhase = 4.55;
float u_bPhase = 0.87;

void main() {
  vec4 displacement = texture2D(u_displacement, vUv);

  float theta = displacement.r * 2. * PI;
  vec2 dir = vec2(sin(theta), cos(theta));

  vec2 uv = vUv + dir * displacement.r;

  vec2 p = 3.0 * uv - vec2(1.5);
  float scaledTime = u_time / 10.; 
  p = rotate2d(PI + scaledTime) * p;
  p += 0.1 * cos(1.0 * p.yx + scaledTime + vec2(5.2, 9.4));
  p += 0.2 * cos(3.2 * p.yx + 2.2 * scaledTime + vec2(5.2, 8.4)) + vec2(-1.2, -1.4);
  p += 0.3 * cos(6.2 * p.yx + 1.2 * scaledTime + vec2(1.2, 1.4)) + vec2(1.2, 1.4);
  p += 0.4 * cos(4.4 * p.yx + 1.1 * scaledTime + vec2(9.2, 4.4));
  p += 0.7 * cos(6.4 * p.yx + 5.1 * scaledTime + vec2(1.2, 1.4));

  float r = sin(length(p) * u_rPhaseMult + u_rPhase) * 0.5 + 0.5;
  float g = sin(length(p) * u_gPhaseMult + u_gPhase) * 0.5 + 0.5;
  float b = sin(length(p) * u_bPhaseMult + u_bPhase) * 0.5 + 0.5;

  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

export default fragmentShader;
