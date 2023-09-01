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
 * @since 01/09/2023, 09:48:05
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.Example = async function() {
 var item;
  //
  item = this.cronapi.cordova.storage.getStorageItem('nome');
  //
  this.cronapi.screen.notify('success',String('Valor do item: ') + String(item));
}
