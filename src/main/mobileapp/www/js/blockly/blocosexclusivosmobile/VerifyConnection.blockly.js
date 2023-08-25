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
 * @author Laila Maria Vieira Souza
 * @since 25/08/2023, 15:55:12
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_4G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}
