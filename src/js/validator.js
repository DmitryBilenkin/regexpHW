class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const regexp = /^[^\d\W_]+(\d{0,3}[a-z_-])*[^\d\W_]+$/gi;
    console.log(regexp);
    return regexp.test(this.name);
  }
}

export default Validator;
