export class GeralUtil {

  /**
   * Formata a string da data, dentro entrada como yyyy-mm-dd;
   *
   * @param {string} data
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static formatDataBR(data: string): string {
    const pedacos = data.split('-');
    return pedacos[2] + '/' + pedacos[1] + '/' + pedacos[0];
  }

  /**
   * Recebe o numero representante do dia e retorna o dia por extenso
   *
   * @param indexDia
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static diaPorExtenso(indexDia: number) {
    if (indexDia === 0) {
      return 'Domingo';
    }
    if (indexDia === 1) {
      return 'Segunda-Feira';
    }
    if (indexDia === 2) {
      return 'Terça-Feira';
    }
    if (indexDia === 3) {
      return 'Quarta-Feira';
    }
    if (indexDia === 4) {
      return 'Quinta-Feira';
    }
    if (indexDia === 5) {
      return 'Sexta-Feira';
    }
    if (indexDia === 6) {
      return 'Sábado';
    }
  }

  /**
   * Método que retorna o status do usuário por escrito.
   *
   * @param {number} ativoUsuario
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static nomeStatusUsuario(ativoUsuario: number): string {
    if (ativoUsuario === 1) {
      return 'Ativo';
    }
    if (ativoUsuario === 0) {
      return 'Inativo';
    }
  }

  /**
   * Método que converte o status número na descrição correspondente.
   *
   * @param {number} statusEvento
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static nomeStatusEvento(statusEvento: number): string {
    if (statusEvento === 0) {
      return 'Rascunho';
    }
    if (statusEvento === 1) {
      return 'Em Aprovação';
    }
    if (statusEvento === 2) {
      return 'Publicado';
    }
    if (statusEvento === 3) {
      return 'Cancelado';
    }
    if (statusEvento === 4) {
      return 'Em Andamento';
    }
    if (statusEvento === 5) {
      return 'Realizado';
    }
    if (statusEvento === 6) {
      return 'Concluído';
    }
    if (statusEvento === 7) {
      return 'Financeiro';
    }
  }

  /**
   * Método que converte o tipo de curso em string.
   *
   * @param {number} nivelCurso
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static nivelCursoEscrito(nivelCurso: number): string {
    return nivelCurso === 0 ? 'Iniciante' : nivelCurso === 1 ? 'Médio' : 'Avançado';
  }

  /**
   *
   * @param {number} situacao
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static situacaoParticipante(situacao: number): string {
    return situacao === 0 ? 'Inscrito' : '';
  }

  /**
   * Recebe o mês com dois digitos em formato de string e retorna o mês de forma escrita.
   *
   * @param {string} mes
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static mesEscrito(mes: string): string {
    switch (mes) {
      case '01':
        return 'Janeiro';
      case '02':
        return 'Fevereiro';
      case '03':
        return 'Março';
      case '04':
        return 'Abril';
      case '05':
        return 'Maio';
      case '06':
        return 'Junho';
      case '07':
        return 'Julho';
      case '08':
        return 'Agosto';
      case '09':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';
    }
  }

  /**
   * Recebe o mês escrito e retorna o numero em formato de string.
   *
   * @param {string} mes
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static mesNumero(mes: string): string {
    switch (mes) {
      case 'Janeiro':
        return '01';
      case 'Fevereiro':
        return '02';
      case 'Março':
        return '03';
      case 'Abril':
        return '04';
      case 'Maio':
        return '05';
      case 'Junho':
        return '06';
      case 'Julho':
        return '07';
      case 'Agosto':
        return '08';
      case 'Setembro':
        return '09';
      case 'Outubro':
        return '10';
      case 'Novembro':
        return '11';
      case 'Dezembro':
        return '12';
    }
  }

  /**
   * Método que passa o status em número para descrito.
   *
   * @param {number} statusRelatorio
   * @returns {string}
   * @author Daniel Silva Marcelino
   */
  public static statusRelatorio(statusRelatorio: number): string {
    switch (statusRelatorio) {
      case 0:
        return 'Rascunho';
      case 1:
        return 'Em Aprovação';
      case 2:
        return 'Rejeitado';
      case 3:
        return 'Aprovado/Financeiro';
    }
  }
}
