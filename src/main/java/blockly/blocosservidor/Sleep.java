package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Sleep {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 16:10:22
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    for (long count = 0; count <
    Var.valueOf(5).getObjectAsLong();count++) {
            System.out.println(
        cronapi.dateTime.Operations.getSecond(
        cronapi.dateTime.Operations.getNow()).getObjectAsString());
        cronapi.util.Operations.sleep(
        Var.valueOf(2));
    } // end for
    return Var.VAR_NULL;
   }
 }.call();
}

}

