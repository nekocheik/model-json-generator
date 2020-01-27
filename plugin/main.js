/**
 * gener a array at fonction model
 * @param {object} model - model
 *  @param {object} params - parms
 * @return {array} array white a model
 */



class genrator {

  constructor (model, { indexStart = 0, indexEnd , log  }) {
    this.model = model
    this.indexStart =  indexStart
    this.i = indexStart
    this.indexEnd = indexEnd
    this.log = log
    this.array = []


    if (!indexEnd) {
      console.log("the function genModelArray need parms end" )
    } else {
    }
    
  }

  genVariable = ( value ) => {
    let array = this.array
    let i = this.i
    let regex = new RegExp(/(\${([\w\d]+)})/);
    if (value.match(regex)) {
      let newValue = eval(value.match(regex)[2])
      return this.genVariable( value.replace(regex, newValue)) ;
    } else {
      return value
    }
  }

  genModelArray = ( ) => {
    for ( null ; this.i < this.indexEnd; this.i++) {
      this.array[this.i] = Object.assign({}, model);
      for (const key in this.model) {
        this.array[this.i][key] = this.genVariable(model[key])
      }
    }
  };
}

const model = {
  'name': '${i}',
};

let newJSON = new genrator( model, {
  indexStart: 1,
  indexEnd: 21,
  log: "${i}",
});

console.log(newJSON.array)