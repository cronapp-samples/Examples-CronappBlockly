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
 * @since 04/09/2023, 12:04:36
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateDirectory.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.createDirectory(this.cronapi.cordova.file.getDirectory('0'), 'NovoDir', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.cordova.file.createFile(item, 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
        item = sender_item;
      //
      this.cronapi.screen.notify('success',String('Sucesso!\n') + String(''));
    }.bind(this), async function(sender_item) {
        item = sender_item;
      //
      this.cronapi.screen.notify('error',String('Erro! \n') + String(item));
    }.bind(this));
    //
    this.cronapi.screen.notify('success',String('Diretório criado com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao criar diretório!\n') + String(item));
  }.bind(this));
}
