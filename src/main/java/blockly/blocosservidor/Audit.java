package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Audit {

public static final int TIMEOUT = 300;

/**
 *
 * @param dadosDaAuditoria
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 10:58:43
 *
 */
public static Var Example(@ParamMetaData(description = "dadosDaAuditoria", id = "dc2ce0f9") Var dadosDaAuditoria) throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    cronapi.util.Operations.audit(
    Var.valueOf("blockly.Bloco"),
    Var.valueOf("Gerando log de auditoria"),
    Var.valueOf("Blockly"), dadosDaAuditoria);
    return Var.VAR_NULL;
   }
 }.call();
}

}

