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
 * @since 21/08/2023, 16:47:08
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.createFile(this.cronapi.cordova.file.getDirectory('0'), 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this));
}
