package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class GetCurrentUserName {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 14:19:57
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(
    cronapi.util.Operations.getCurrentUserName().getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

