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
 * @since 11/09/2023, 14:53:53
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example = async function() {
 var item;
  //
  this.cronapi.cordova.file.createFile(this.cronapi.cordova.file.getDirectory('0'), 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
      item = sender_item;
    //
    if (this.cronapi.logic.isNull(item)) {
      //
      this.cronapi.screen.notify('success','É nulo');
    } else if (this.cronapi.logic.isEmpty(item)) {
      //
      this.cronapi.screen.notify('error','Vazio');
    }
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
 * @since 11/09/2023, 14:53:53
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.CreateFile.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.file.createFile(String(this.cronapi.cordova.file.getDirectory('0')) + String('NovoDir'), 'meuArquivo.txt', 'Este conteúdo será adicionado ao arquivo criado', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Arquivo criado com sucesso!');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao criar arquivo!');
  }.bind(this));
}
