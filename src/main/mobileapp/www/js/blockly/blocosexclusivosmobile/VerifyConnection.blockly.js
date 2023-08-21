window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection = window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 21/08/2023, 11:10:19
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.UNKNOWN');
  //
  this.cronapi.screen.notify('success',String('SS') + String(status2));
}
