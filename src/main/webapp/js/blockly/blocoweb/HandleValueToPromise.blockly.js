window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocoweb = window.blockly.js.blockly.blocoweb || {};
window.blockly.js.blockly.blocoweb.HandleValueToPromise = window.blockly.js.blockly.blocoweb.HandleValueToPromise || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 15:34:19
 *
 */
window.blockly.js.blockly.blocoweb.HandleValueToPromise.ExampleArgs = [];
window.blockly.js.blockly.blocoweb.HandleValueToPromise.Example = async function() {
 var promessa, item;
  //
  promessa = this.cronapi.util.createPromise();
  //
  this.cronapi.util.monitorPromise(promessa, async function(sender_item) {
      item = sender_item;
    //
    console.log(String('Monitorar Sucesso >>') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log(String('Monitorar Erro>>') + String(item));
  }.bind(this));
  //
  this.cronapi.util.getURLFromOthers('GET', 'application/x-www-form-urlencoded', 'https://app-11-85-49464.ide.cronapp.io/', null, null, async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.util.handleValueToPromise('resolve', promessa, item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.util.handleValueToPromise('reject', promessa, 'Erro ao obter os dados da requisição');
  }.bind(this));
}
