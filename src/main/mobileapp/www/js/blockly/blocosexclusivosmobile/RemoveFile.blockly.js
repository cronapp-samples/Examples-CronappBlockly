window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile = window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/08/2023, 10:36:07
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.RemoveFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.removeFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo removido com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao remover arquivo!');
  }.bind(this));
}
