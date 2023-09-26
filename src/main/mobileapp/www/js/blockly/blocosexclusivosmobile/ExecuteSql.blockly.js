window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.blocosexclusivosmobile = window.blockly.js.blockly.blocosexclusivosmobile || {};
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql = window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql || {};

/**
 * @function CriarBanco
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.CriarBancoArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.CriarBanco = async function() {
 var objeto, i, item, lista;
  //
  this.cronapi.cordova.database.openDatabase('contatos');
}

/**
 * @function CriarTabelas
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.CriarTabelasArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.CriarTabelas = async function() {
 var objeto, i, item, lista;
  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'CREATE TABLE PESSOA (idPessoa integer PRIMARY KEY, nome);\nCREATE TABLE TELEFONE (idTelefone integer PRIMARY KEY, numero, idPessoa, CONSTRAINT fk_PesTel FOREIGN KEY (idPessoa) REFERENCES PESSOA (idPes' +
   'soa));', null));
}

/**
 * @function DeletarRegistros
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.DeletarRegistrosArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.DeletarRegistros = async function() {
 var objeto, i, item, lista;
  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'DELETE FROM TELEFONE WHERE idTel=?', ['1']));
}

/**
 * @function InserirRegistros
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.InserirRegistrosArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.InserirRegistros = async function() {
 var objeto, i, item, lista;
  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'INSERT INTO Pessoa (nome) VALUES (?);', ['Ana']));
  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'INSERT INTO TELEFONE (idPessoa, num) VALUES (1,\'(51) 98764-3200\');\nINSERT INTO TELEFONE (idPessoa, num) VALUES (1,\'(63) 99097-6578\');', null));
}

/**
 * @function AtualizarDados
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.AtualizarDadosArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.AtualizarDados = async function() {
 var objeto, i, item, lista;
  //
  item = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'UPDATE PESSOA SET nome=? WHERE idPessoa=1;', ['Ana Paula']));
}

/**
 * @function ConsultarRegistros
 *
 *
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 22/09/2023, 14:48:22
 *
 */
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.ConsultarRegistrosArgs = [];
window.blockly.js.blockly.blocosexclusivosmobile.ExecuteSql.ConsultarRegistros = async function() {
 var objeto, i, item, lista;
  //
  objeto = (await this.cronapi.client('cronapi.cordova.database.executeSQL').run('contatos', 'SELECT * FROM TELEFONE WHERE idPessoa=?;', ['1']));
  //
  for (var i_index in objeto) {
    i = objeto[i_index];
    //
    item = this.cronapi.object.getProperty(i, 'num');
    //
    if (item == null) {
      //
      break;
    }
    //
    lista = [lista,this.cronapi.text.newline(),item].join('');
  }
  //
  this.cronapi.screen.changeValueOfField("vars.textarea4001", item);
}
