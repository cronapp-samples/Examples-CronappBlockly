window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem = window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 25/08/2023, 15:03:35
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem.Example = async function() {

  //
  this.cronapi.cordova.storage.removeStorageItem('nome');
}
