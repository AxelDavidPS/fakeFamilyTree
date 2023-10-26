export class PersonModel {

  static async getPerson(id) {
    return `informacion del usuario: ${id}`;
  }

  static async getMother(id) {
    return `informacion de la madre del usuario: ${id}`;
  }

  static async getFather(id) {
    return `informacion del padre del usuario: ${id}`;
  }

  static async getSpouse(id) {
    return `informacion del cónyuge del usuario: ${id}`;
  }

  static async getBrothers(id) {
    return `informacion de los hermanos(hombres) del usuario: ${id}`;
  }

  static async getSisters(id) {
    return `informacion de las hermanas del usuario: ${id}`;
  }

  static async getSiblings(id) {
    return `informacion de todos los hermanos del usuario: ${id}`;
  }

}
