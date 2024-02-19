package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class DecodeUrl {

public static final int TIMEOUT = 300;

/**
 *
 * @author Fábio Duarte Freitas
 * @since 19/02/2024, 14:39:00
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(
    cronapi.util.Operations.decodeUrl(
    Var.valueOf("https%3A%2F%2Fwww.cronapp.io%2F%24%26%20oi.mp3")).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

