window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem = window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 24/08/2023, 15:01:42
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.Example = async function() {

  //
  this.cronapi.cordova.storage.setStorageItem('nome', 'Ana');
}
