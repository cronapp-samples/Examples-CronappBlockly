window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile = window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile || {};

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 14:26:30
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.removeFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meu.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Sucesso!') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Erro!') + String(item));
  }.bind(this));
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 14:26:30
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.removeFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Sucesso!') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro!') + String(item));
  }.bind(this));
}
