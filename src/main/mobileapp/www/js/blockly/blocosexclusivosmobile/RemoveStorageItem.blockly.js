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
 * @since 01/09/2023, 09:48:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.RemoveStorageItem.Example = async function() {
 var item;
  //
  this.cronapi.cordova.storage.removeStorageItem('nome');
  //
  item = this.cronapi.cordova.storage.getStorageItem('nome');
  //
  this.cronapi.screen.notify('success',String('Valor do item: ') + String(item));
}
