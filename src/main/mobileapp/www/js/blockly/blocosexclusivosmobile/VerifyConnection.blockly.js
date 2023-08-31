window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection = window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection || {};

/**
 * @function NehnumaConexao
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.NehnumaConexaoArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.NehnumaConexao = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.NONE');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function ConexaoDesconhecida
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoDesconhecidaArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoDesconhecida = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.UNKNOWN');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function ConecaoEthernet
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConecaoEthernetArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConecaoEthernet = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.ETHERNET');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function ConexaoWiFi
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoWiFiArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoWiFi = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.WIFI');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Conexao2G
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao2GArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao2G = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_2G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Conexao3G
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao3GArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao3G = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_3G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function Conexao4G
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao4GArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.Conexao4G = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL_4G');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}

/**
 * @function ConexaoGenerica
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 31/08/2023, 12:11:16
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoGenericaArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.VerifyConnection.ConexaoGenerica = async function() {
 var status;
  //
  status2 = this.cronapi.cordova.connection.verifyConnection('Connection.CELL');
  //
  this.cronapi.screen.notify('success',String('Status da Rede: ') + String(status2));
}
