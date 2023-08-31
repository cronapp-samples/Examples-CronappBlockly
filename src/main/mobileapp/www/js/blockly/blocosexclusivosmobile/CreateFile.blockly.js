window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile = window.blockly.js.blockly.blocosexclusivosmobile.CreateFile || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 08:06:13
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.createFile(this.cronapi.cordova.file.getDirectory('0'), 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo criado com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao criar arquivo!');
  }.bind(this));
}

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 08:06:13
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.createFile(this.cronapi.cordova.file.getDirectory('1'), 'NovoDir/meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Sucesso! ') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro! ') + String(item));
  }.bind(this));
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('NovoDir/meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Sucesso! ') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro!') + String(item));
  }.bind(this), 'TEXT');
}
