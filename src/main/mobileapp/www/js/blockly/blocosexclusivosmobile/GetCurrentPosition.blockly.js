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
 * @since 31/08/2023, 12:03:55
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example2 = async function() {
 var item;
  //
  this.cronapi.cordova.geolocation.getCurrentPosition(async function(sender_item) {
      item = sender_item;
    //
    objeto = [String('Latitude: ') + String(this.cronapi.object.getProperty(item, 'coords.latitude')),String('\nLongitude: ') + String(this.cronapi.object.getProperty(item, 'coords.longitude')),String('\nAltitude: ') + String(this.cronapi.object.getProperty(item, 'coords.altitude')),String('\nAccuracy: ') + String(this.cronapi.object.getProperty(item, 'coords.accuracy')),String('\nAA: ') + String(this.cronapi.object.getProperty(item, 'coords.altitudeAccuracy')),String('\nHeading: ') + String(this.cronapi.object.getProperty(item, 'coords.heading')),String('\nSpeed: ') + String(this.cronapi.object.getProperty(item, 'coords.speed')),String('\nTimestamp: ') + String(this.cronapi.object.getProperty(item, 'timestamp'))].join('');
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
 * @function Example3
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:03:55
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example3Args = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example3 = async function() {
 var item;
  //
  this.cronapi.cordova.geolocation.getCurrentPosition(async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Sucesso! \n') + String(item));
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('success',String('Erro! \n') + String(item));
  }.bind(this));
}

/**
 * @function Example
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:03:55
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.ExampleArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.GetCurrentPosition.Example = async function() {
 var item;
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
