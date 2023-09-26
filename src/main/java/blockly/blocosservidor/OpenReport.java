package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class OpenReport {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 15:28:19
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    cronapi.util.Operations.callClientFunction(Var.valueOf("cronapi.util.openReport"),
    Var.valueOf("reports/alunos.report"), cronapi.list.Operations.newList(Var.valueOf("aprovado" ,
    Var.VAR_TRUE)));
    return Var.VAR_NULL;
   }
 }.call();
}

}

