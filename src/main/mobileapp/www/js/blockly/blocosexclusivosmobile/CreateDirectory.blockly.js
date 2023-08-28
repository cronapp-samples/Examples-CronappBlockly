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
 * @since 28/08/2023, 09:18:47
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

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 09:18:47
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.createDirectory(this.cronapi.cordova.file.getDirectory('1'), 'NovoDir', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Diretório criado com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao criar diretório!');
  }.bind(this));
}
