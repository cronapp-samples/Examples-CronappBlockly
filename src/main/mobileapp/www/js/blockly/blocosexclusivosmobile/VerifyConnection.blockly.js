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
 * @since 25/08/2023, 16:59:30
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.WIFI');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 25/08/2023, 16:59:30
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example2 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_4G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example3
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 25/08/2023, 16:59:30
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example3Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example3 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}
