window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.GetConnection = window.blockly.js.blockly.blocosexclusivosmobile.GetConnection || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 21/08/2023, 10:47:19
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetConnection.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetConnection.Example = async function() {
 var tipoDeRede;
  //
  tipoDeRede = this.cronapi.cordova.connection.getConnection();
  return tipoDeRede;
}
