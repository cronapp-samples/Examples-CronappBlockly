window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate = window.blockly.js.blockly.blocosexclusivosmobile.Vibrate || {};

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 29/08/2023, 13:45:19
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.Example2 = async function() {
 var padrao;
  //
  this.cronapi.cordova.vibrate(3000);
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 29/08/2023, 13:45:19
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.Vibrate.Example = async function() {
 var padrao;
  //
  this.cronapi.cordova.vibrate([500, 200, 800, 500, 1100]);
}
