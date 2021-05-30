// To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
export function func () {
   console.log('This is a exported funtions at the time of declaration')
}
function func2 () {
    console.log('This is a exported funtions seperately')
 }

export {func2 };