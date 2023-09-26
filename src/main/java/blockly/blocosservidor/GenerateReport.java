package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class GenerateReport {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 15:06:29
 *
 */
public static Var Example() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    System.out.println(
    cronapi.report.Operations.generateReport(
    Var.valueOf("reports/alunos.report"),
    Var.valueOf("src/main/webapp/public/assets/relatorio/relatorioAlunos.pdf"), cronapi.list.Operations.newList(Var.valueOf("aprovado" ,
    Var.VAR_TRUE))).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

