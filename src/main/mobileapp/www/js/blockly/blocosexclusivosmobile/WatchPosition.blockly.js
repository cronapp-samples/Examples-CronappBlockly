window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.WatchPosition = window.blockly.js.blockly.blocosexclusivosmobile.WatchPosition || {};

/**
 * @function Example
 *
 *
 *
 *
 * @author Fábio Duarte Freitas
 * @since 24/08/2023, 14:33:03
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.WatchPosition.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.WatchPosition.Example = async function() {
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
}
