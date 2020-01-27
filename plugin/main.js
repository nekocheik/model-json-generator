/**
 * gener a array at fonction model
 * @param {object} model - model
 *  @param {object} params - parms
 * @return {array} array white a model
 */

const genArray = function( model,  ) {
  const array = [];

  for (let i = 1; i < 21; i++) {
    array[i] = Object.assign({}, model);
    for (const key in model) {
      const regex = new RegExp(/(\${(.+)})/);
      const varible = eval(model[key].match(regex)[2]);
      array[i][key] = model[key].replace( regex, varible);
    }
  }

  return array;
};

const model = {
  'hopitaux': '${Math.floor(Math.random() * Math.floor(3))}',
  'maladie': '${Math.floor(Math.random() * 10)}',
  'total': '${ array[i].hopitaux + array[i].maladie }',
  'name': '${i}_departement',
  'number': '${i}',
};

let newJSON = genArray(model, {
  indexStart: 1,
  indexEnd: 21,
  log: console.log(),
});

console.log()