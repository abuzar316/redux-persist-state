import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-redux-persist",
  },
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
};
