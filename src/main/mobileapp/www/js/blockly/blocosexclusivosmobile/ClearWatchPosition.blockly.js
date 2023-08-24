window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.ClearWatchPosition = window.blockly.js.blockly.blocosexclusivosmobile.ClearWatchPosition || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 24/08/2023, 16:40:46
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ClearWatchPosition.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ClearWatchPosition.Example = async function() {
 var id, item, coordenada;
  //
  id = this.cronapi.cordova.geolocation.watchPosition(async function(sender_item) {
      item = sender_item;
    //
    coordenada = ['Lat:',this.cronapi.object.getProperty(item, 'coords.latitude'),'Long:',this.cronapi.object.getProperty(item, 'coords.longitude')].join('');
    //
    this.cronapi.screen.notify('success',coordenada);
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this), 3000, 5000, true);
  //
  this.cronapi.cordova.geolocation.clearWatchPosition(id);
}
