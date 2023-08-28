window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.GetStorageItem = window.blockly.js.blockly.blocosexclusivosmobile.GetStorageItem || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 16:13:53
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetStorageItem.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetStorageItem.Example = async function() {
 var item;
  //
  item = this.cronapi.cordova.storage.getStorageItem('nome');
  //
  this.cronapi.screen.notify('success',String('Valor do item: ') + String(item));
}
