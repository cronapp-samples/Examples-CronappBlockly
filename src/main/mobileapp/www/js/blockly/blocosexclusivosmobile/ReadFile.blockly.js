window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile = window.blockly.js.blockly.blocosexclusivosmobile.ReadFile || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'TEXT');
}

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'ARRAYBUFFER');
}

/**
 * @function Example3
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example3Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example3 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'BINARYSTRING');
}

/**
 * @function Example4
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example4Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example4 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'DATAURL');
}

/**
 * @function Example5
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example5Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example5 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'DATAURL');
}

/**
 * @function Example6
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 13:40:06
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example6Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Example6 = async function() {
 var item;
  //
  this.cronapi.cordova.file.readFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('NovoDir/meuArquivo.txt'), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Arquivo lido com sucesso!\n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error',String('Erro ao ler arquivo!') + String(item));
  }.bind(this), 'TEXT');
}
