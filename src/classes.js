/**
 * Class to create a new programmer
 * @example
 * const programmer = new Programmer({fullname: "John Perez"}, "Python");
 * programmer.getInfo();
 * @see https://github.com/luisAriza/learning_jsdocs
 * @todo Implement the rest of methods
 */
class Programmer {
  /**
   * @param {{fullname: string}} user User's information
   * @param {string} language A programming language
   */
  constructor(user, language) {
    this.fullname = user.fullname;
    this.language = language;
  }
  /**
   * Get programmer information
   * @returns {void}
   */
  getInfo() {
    console.log(
      `I'm ${this.fullname} and ${this.language} is my favorite programming language`
    );
  }
}

const programmerOne = new Programmer({ fullname: "Luis Ariza" }, "JavaScript");
const programmerTwo = new Programmer({ fullname: "Tatiana Sanz" }, "C#");

programmerOne.getInfo();
programmerTwo.getInfo();
