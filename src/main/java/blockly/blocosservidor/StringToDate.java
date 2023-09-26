package blockly.blocosservidor;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class StringToDate {

public static final int TIMEOUT = 300;

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 14:42:20
 *
 */
public static Var Converter_texto_para_data() throws Exception {
 return new Callable<Var>() {

   private Var data = Var.VAR_NULL;

   public Var call() throws Exception {
    data =
    cronapi.conversion.Operations.stringToDate(
    Var.valueOf("01/04/83 15:55:35"),
    Var.valueOf("dd/MM/yy HH:mm:ss"));
    System.out.println(
    Var.valueOf(
    Var.valueOf("Data completa: ").getObjectAsString() +
    data.getObjectAsString()).getObjectAsString());
    System.out.println(
    Var.valueOf(
    Var.valueOf("Ano: ").getObjectAsString() +
    cronapi.dateTime.Operations.getYear(data).getObjectAsString()).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

/**
 *
 * @author Laila Maria Vieira Souza
 * @since 26/09/2023, 14:42:20
 *
 */
public static Var Converter_texto_para_data_com_Fuso_Hor_C3_A1rio() throws Exception {
 return new Callable<Var>() {

   private Var dataComFuso = Var.VAR_NULL;

   public Var call() throws Exception {
    dataComFuso =
    cronapi.conversion.Operations.stringToDate(
    Var.valueOf("05/09/2023 14:58:50"),
    Var.valueOf("dd/MM/yy HH:mm:ss"),
    Var.valueOf(-5));
    System.out.println(
    Var.valueOf(
    Var.valueOf("Data com fuso: ").getObjectAsString() +
    dataComFuso.getObjectAsString()).getObjectAsString());
    return Var.VAR_NULL;
   }
 }.call();
}

}

