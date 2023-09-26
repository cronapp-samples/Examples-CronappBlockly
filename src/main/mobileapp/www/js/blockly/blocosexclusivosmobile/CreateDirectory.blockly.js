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
 * @since 11/09/2023, 14:53:44
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.Example = async function() {
 var item, item1;
  //
  this.cronapi.cordova.file.createDirectory(this.cronapi.cordova.file.getDirectory('0'), 'NovoDir', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Diretório criado com sucesso!\n') + String(item));
    //
    this.cronapi.cordova.file.createFile(item, 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item1) {
        item1 = sender_item1;
      //
      this.cronapi.screen.notify('success','Arquivo criado com sucesso!');
    }.bind(this), async function(sender_item1) {
        item1 = sender_item1;
      //
      this.cronapi.screen.notify('error','Erro ao criar arquivo!');
    }.bind(this));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao criar diretório!\n') + String(item));
  }.bind(this));
}
