import babel from "rollup-plugin-babel";
import path from "path";
import {
  dependencies,
  devDependencies,
  peerDependencies
} from "./package.json";

const getConfig = format => {
  const dest = path.join("dist", format);

  return {
    input: "src/index.jsx",
    output: {
      dir: dest,
      format,
      sourcemap: true
    },
    plugins: [babel()],
    preserveModules: true,
    external: id =>
      (dependencies && dependencies[id]) ||
      (devDependencies && devDependencies[id]) ||
      (peerDependencies && peerDependencies[id])
  };
};

export default [getConfig("es"), getConfig("cjs")];
