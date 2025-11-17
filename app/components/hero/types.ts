export interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
}

export interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}
