import buble from 'rollup-plugin-buble';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/svelte-store-reduce.es.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/svelte-store-reduce.cjs.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [buble(), filesize()]
};
