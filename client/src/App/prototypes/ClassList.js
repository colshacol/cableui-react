
export class ClassList {
  constructor(...classes) {
    this.classes =  classes || ['']
  }

  addClasses(...classes) {
    for(let _class of classes) this.classes.push(_class)
  }
}
