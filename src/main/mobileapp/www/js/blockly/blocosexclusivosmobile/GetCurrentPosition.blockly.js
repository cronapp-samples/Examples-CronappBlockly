window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition = window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition || {};

/**
 * @function Example2
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 16:05:00
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2 = async function() {
 var item, objeto;
  //
  this.cronapi.cordova.geolocation.getCurrentPosition(async function(sender_item) {
      item = sender_item;
    //
    objeto = [this.cronapi.object.getProperty(item, 'coords.latitude'),this.cronapi.object.getProperty(item, 'coords.longitude'),this.cronapi.object.getProperty(item, 'coords.altitude'),this.cronapi.object.getProperty(item, 'coords.accuracy'),this.cronapi.object.getProperty(item, 'coords.altitudeAccuracy'),this.cronapi.object.getProperty(item, 'coords.heading'),this.cronapi.object.getProperty(item, 'coords.speed'),this.cronapi.object.getProperty(item, 'coords.timestamp')].join('');
    //
    this.cronapi.screen.notify('success',objeto);
    //
    console.log(objeto);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success','Erro ao obter informações de localização!');
  }.bind(this));
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 23/08/2023, 16:05:00
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example = async function() {
 var item, objeto;
  //
  this.cronapi.cordova.geolocation.getCurrentPosition(async function(sender_item) {
      item = sender_item;
    //
    objeto = ['Latitude: ',this.cronapi.object.getProperty(item, 'coords.latitude'),'\nLongitude: ',this.cronapi.object.getProperty(item, 'coords.longitude')].join('');
    //
    this.cronapi.screen.notify('success',objeto);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao obter geolocalização!');
  }.bind(this));
}
