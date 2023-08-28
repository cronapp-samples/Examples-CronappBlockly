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
 * @since 28/08/2023, 10:57:53
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2 = async function() {
 var item, objeto;
  //
  this.cronapi.cordova.geolocation.getCurrentPosition(async function(sender_item) {
      item = sender_item;
    //
    objeto = [String('Latitude: ') + String(this.cronapi.object.getProperty(item, 'coords.latitude')),String('Longitude: ') + String(this.cronapi.object.getProperty(item, 'coords.longitude')),String('Altitude: ') + String(this.cronapi.object.getProperty(item, 'coords.altitude')),String('Accuracy: ') + String(this.cronapi.object.getProperty(item, 'coords.accuracy')),String('AA: ') + String(this.cronapi.object.getProperty(item, 'coords.altitudeAccuracy')),String('Heading: ') + String(this.cronapi.object.getProperty(item, 'coords.heading')),String('Speed: ') + String(this.cronapi.object.getProperty(item, 'coords.speed')),String('Timestamp: ') + String(this.cronapi.object.getProperty(item, 'coords.timestamp'))].join('');
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
 * @since 28/08/2023, 10:57:53
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
