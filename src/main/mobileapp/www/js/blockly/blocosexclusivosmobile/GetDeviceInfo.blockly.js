window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo = window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 22/08/2023, 16:34:00
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('model');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}
