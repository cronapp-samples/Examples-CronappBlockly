window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory = window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory || {};

/**
 * @function Example2
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 10:37:24
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory.Example2 = async function() {
 var diretorio;
  //
  diretorio = this.cronapi.cordova.file.getDirectory('0');
  //
  this.cronapi.screen.notify('success',diretorio);
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 10:37:24
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDirectory.Example = async function() {
 var diretorio;
  //
  diretorio = this.cronapi.cordova.file.getDirectory('0');
  //
  this.cronapi.screen.notify('success',diretorio);
}
