window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.QrCodeScanner = window.blockly.js.blockly.blocosexclusivosmobile.QrCodeScanner || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 28/08/2023, 13:34:23
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.QrCodeScanner.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.QrCodeScanner.Example = async function() {
 var item;
  //
  this.cronapi.cordova.camera.qrCodeScanner('QR_CODE', 'Aponte a câmera do seu celular para o QrCode.', async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Não foi possível ler o QrCode.\n');
  }.bind(this));
}
