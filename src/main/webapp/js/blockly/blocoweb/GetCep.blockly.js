window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocoweb = window.blockly.js.blockly.blocoweb || {};
window.blockly.js.blockly.blocoweb.GetCep = window.blockly.js.blockly.blocoweb.GetCep || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 12:09:15
 *
 */
window.blockly.js.blockly.blocoweb.GetCep.ExampleArgs = [];
window.blockly.js.blockly.blocoweb.GetCep.Example = async function() {
 var item;
  //
  this.cronapi.util.getCEP('41830-494', async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
    //
    console.log(String('Cidade: ') + String(this.cronapi.json.getProperty(item, 'localidade')));
  }.bind(this));
}
