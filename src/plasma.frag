precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  gl_FragColor.r = 0.1 + 0.1 * cos(cos(time) + uv.x + (uv.y * 3.0) * cos(time));
  gl_FragColor.g = 0.1 + 0.1 * cos(cos(time) + (1.0-uv.x) + (uv.y * 2.2) * cos(time * 1.2));
  gl_FragColor.b = 0.1 + 0.1 * cos(cos(time) + uv.x + ((1.0-uv.y) * 1.7) * cos(time * 2.7));
  gl_FragColor.a = 1.0;
}
