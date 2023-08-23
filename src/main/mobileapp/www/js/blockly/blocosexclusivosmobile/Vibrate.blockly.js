window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate = window.blockly.js.blockly.blocosexclusivosmobile.Vibrate || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 13:49:58
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.Example = async function() {
 var padrao;
  //
  padrao = [500, 200, 800, 500, 1100];
  //
  this.cronapi.cordova.vibrate(padrao);
}
