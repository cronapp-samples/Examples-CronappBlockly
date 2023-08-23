window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile = window.blockly.js.blockly.blocosexclusivosmobile.ReadFile || {};

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 09:57:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile('meuArquivo.txt', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo lido com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao ler arquivo!');
  }.bind(this), 'TEXT');
}

/**
 * @function Example3
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 09:57:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example3Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example3 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile('meuArquivo.txt', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo lido com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao ler arquivo!');
  }.bind(this), 'BINARYSTRING');
}

/**
 * @function Example4
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 09:57:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example4Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example4 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile('meuArquivo.txt', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo lido com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao ler arquivo!');
  }.bind(this), 'DATAURL');
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 09:57:31
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile('meuArquivo.txt', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo lido com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao ler arquivo!');
  }.bind(this), 'ARRAYBUFFER');
}
