let user = {
  age: 54,
  name: 'hisham',
  magic: true,
  scream: function() {
    console.log('ahhhhh');
  }
}

user.spell = 'abra kadabra' // added to object

user.scream()


const a = new Map() // maintains order of insertion
const b = new Set() // stores only keys not values