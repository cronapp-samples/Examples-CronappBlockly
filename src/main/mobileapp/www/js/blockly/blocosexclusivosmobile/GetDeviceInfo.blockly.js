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
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('uuid');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example2
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example2 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('model');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example3
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example3Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example3 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('platform');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example4
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example4Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example4 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('version');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example5
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example5Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example5 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('manufacturer');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example6
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example6Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example6 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('isVirtual');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}

/**
 * @function Example7
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 23/08/2023, 08:56:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example7Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetDeviceInfo.Example7 = async function() {
 var obterInformacao;
  //
  obterInformacao = this.cronapi.cordova.device.getDeviceInfo('serial');
  //
  this.cronapi.screen.notify('success',obterInformacao);
}
