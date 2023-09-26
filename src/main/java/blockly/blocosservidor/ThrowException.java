package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class ThrowException {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 14:23:16
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   private Var excecao = Var.VAR_NULL;

   public Var call() throws Exception {
    excecao =
    cronapi.util.Operations.createException(
    Var.valueOf("Arquivo não encontrado"));
    cronapi.util.Operations.throwException(excecao);
    return Var.VAR_NULL;
   }
 }.call();
}

}

