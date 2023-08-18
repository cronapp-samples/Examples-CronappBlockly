window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.BlocoMobile = window.blockly.js.blockly.BlocoMobile || {};

/**
 * @function VerificarStatusDaRede
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 18/08/2023, 14:50:05
 *
 */
window.blockly.js.blockly.BlocoMobile.VerificarStatusDaRedeArgs = [];
window.blockly.js.blockly.BlocoMobile.VerificarStatusDaRede = async function() {
 var item;
  //
  item = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_4G');
}
