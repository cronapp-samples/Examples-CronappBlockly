package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class ScheduleExecution {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 14:17:25
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   private Var minuto = Var.VAR_NULL;

   public Var call() throws Exception {
    cronapi.util.Operations.scheduleExecution(() -> {
      try {
        minuto =
        cronapi.dateTime.Operations.getMinute(
        cronapi.dateTime.Operations.getNow());
        System.out.println(minuto.getObjectAsString());
      } catch(Exception e) {
        throw new RuntimeException(e);
      }
     },
    Var.valueOf(1),
    Var.valueOf(2),
    Var.valueOf("MINUTES"));
    return Var.VAR_NULL;
   }
 }.call();
}

}

