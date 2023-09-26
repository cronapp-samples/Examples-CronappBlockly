window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile = window.blockly.js.blockly.blocosexclusivosmobile.ReadFile || {};

/**
 * @function Text
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 08:13:38
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Text2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Text2 = async function() {
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
 * @function Arraybuffer
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 08:13:38
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.ArraybufferArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Arraybuffer = async function() {
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
 * @function BinaryString
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 08:13:38
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.BinaryStringArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.BinaryString = async function() {
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
 * @function DataUrl
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 08:13:38
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.DataUrlArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.DataUrl = async function() {
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
 * @function Teste
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 11/09/2023, 08:13:38
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.TesteArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ReadFile.Teste = async function() {
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
