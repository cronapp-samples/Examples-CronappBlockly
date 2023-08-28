window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection = window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection || {};

/**
 * @function Example8
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example8Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example8 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.NONE');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.WIFI');
  //
  this.cronapi.screen.notify('success',String('Conexão WiFi: ') + String(status2));
}

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
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
 * @since 28/08/2023, 10:39:46
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

/**
 * @function Example4
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example4Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example4 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_2G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example5
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example5Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example5 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_3G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example6
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example6Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example6 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.ETHERNET');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Example7
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 10:39:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example7Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Example7 = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.UNKNOWN');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}
