import {FormControl, FormGroup} from "@angular/forms";

/**
 * Classe que contém os métodos para validação de formulário.
 *
 * @author Daniel Silva Marcelino
 */
export class ValidatorsForm {

  /**
   * Método que valida o campo de e-mail de acordo com as normas internacionais.
   *
   * @param fc Objeto do formulário com o valor a ser validado.
   * @returns {{E-mail Inválido!: boolean}}
   * @author Daniel Silva Marcelino
   */
  public static email(fc: FormControl) {
    let emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(fc.value) ? null : {
      "E-mail Inválido!": true
    }
  }

  /**
   * Método que valida o campo de e-mail de acordo com as normas internacionais.
   *
   * @param email
   * @returns {boolean}
   * @author Daniel Silva Marcelino
   */
  public static emailString(email: string) {
    let emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  /**
   * Método que valida o campo do nome completo para saber se ele está vázio ou foi digitado apenas espaços.
   *
   * @param fc Objeto do formulário com o valor a ser validado.
   * @returns {{Nome Incompleto!: boolean}}
   * @author Daniel Silva Marcelino
   */
  public static nomeCompleto(fc: FormControl) {
    let nomeCompleto = String(fc.value).trim().replace("\\s+", " ").replace("^\\s+", "").replace("\\s+$", "").replace("[!#$%&'()*+,-./:;?@[\\\]_`{|}~]", "");
    return nomeCompleto !== "" && nomeCompleto.length >= 7 && nomeCompleto.indexOf(" ") > 1 ? null : {
      "Nome Incompleto!": true
    }
  }

  /**
   * Método que realiza a checagem para que seja um CPF válido de acordo com a norma.
   *
   * @param fc Objeto do formulário com o valor a ser validado.
   * @returns {any}
   * @author Daniel Silva Marcelino
   */
  public static validarCPF(fc: FormControl) {
    let cpf = String(fc.value).replace(/[^\d]+/g, '');
    if (cpf == '') return {"CPF Inválido": true};
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return {"CPF Inválido": true};
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return {"CPF Inválido": true};
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return {"CPF Inválido": true};

    return null;
  }

  /**
   * Método que realiza a comparação dos campos de senha.
   *
   * @param gp Objeto do grupo de formulário com os valores serem validados.
   * @returns {any}
   * @author Daniel Silva Marcelino
   */
  public static compararSenhas(gp: FormGroup) {
    let firstPassword = gp.controls['novaSenha'].value;
    let secondPassword = gp.controls['repetirNovaSenha'].value;
    if ((firstPassword && secondPassword) && (firstPassword != secondPassword)) {
      gp.controls['repetirNovaSenha'].setErrors({"As senhas não correspondem!!": true});
      return {"As senhas não correspondem!!": true};
    } else {
      return null;
    }
  }

  /**
   * Método que realiza a validação do campo de telefone celular, mitigando número inexistentes.
   *
   * @param fc Objeto do grupo de formulário com os valores serem validados.
   * @returns {{Telefone Inválido!: boolean}}
   * @author Daniel Silva Marcelino
   */
  public static telefone(fc: FormControl) {
    if (fc.value === "" || fc.value === null) {
      return null;
    } else {
      let telefoneRegex: RegExp = /^\s?(?:\()[1-9]{2}(?:\))\s?[9]{1}[5-9]{1}[0-9]{3}(?:-)[0-9]{4}/;
      return telefoneRegex.test(fc.value) ? null : {
        "Telefone Inválido!": true
      }
    }
  }

  /**
   * Método que formata o valor monetário em formato brasileiro.
   *
   * @param valor
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  static formatReal(valor): string {
    let tmp = String(valor).replace(/([0-9]{2})$/g, ",$1").replace(".", "");
    if (tmp.length > 6)
      tmp = tmp.replace(/([0-9]{3})([0-9]{2}$)/g, ".$1,$2");

    return tmp;
  }

  /**
   * Método que retorna a hora formatada.
   *
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  static getHourMinSec(): string {
    let date = new Date();
    let hora, minuto, segundo;

    if (date.getHours() < 10) {
      hora = "0" + String(date.getHours());
    } else {
      hora = String(date.getHours());
    }

    if (date.getMinutes() < 10) {
      minuto = "0" + String(date.getMinutes());
    } else {
      minuto = String(date.getMinutes());
    }

    if (date.getSeconds() < 10) {
      segundo = "0" + String(date.getSeconds());
    } else {
      segundo = String(date.getSeconds());
    }

    return hora + ":" + minuto + ":" + segundo;
  }
}
