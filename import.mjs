// To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
import {func, func2} from './export.mjs';
// import * as allFunc from './export.mjs'; // import all

console.log('this is a import file');

func();
func2();

// allFunc.func();
// allFunc.func2();