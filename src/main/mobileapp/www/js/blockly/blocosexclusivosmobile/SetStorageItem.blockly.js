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
 * @since 28/08/2023, 14:52:35
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.SetStorageItem.Example = async function() {
 var item;
  //
  this.cronapi.cordova.storage.setStorageItem('nome', 'Ana');
  //
  item = this.cronapi.cordova.storage.getStorageItem('nome');
  //
  this.cronapi.screen.notify('success',String('Valor do item: ') + String(item));
}
