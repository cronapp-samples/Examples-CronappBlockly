window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory = window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/08/2023, 17:01:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.createDirectory(this.cronapi.cordova.file.getDirectory('0'), 'NovoDir', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Diretório criado com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao criar diretório!');
  }.bind(this));
}
