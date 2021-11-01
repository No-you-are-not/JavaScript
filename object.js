const objects = [
    {
    id: 1,
        displayName: 'Object John',
    date: '10-12-2020',
    enabled: true,
    relation: null
},
{
    id: 2,
        displayName: 'Object Kate',
    date: '21-06-2020',
    enabled: false,
    relation: {
    relationId: 1
}
},
{
    id: 3,
        displayName: 'Object Bob',
    date: '03-04-2020',
    enabled: true,
    relation: {
    relationId: 1
}
},
{
    id: 4,
        displayName: 'Object Alex',
    date: '12-12-2021',
    enabled: false,
    relation: null
},
{
    id: 5,
        displayName: 'Object Pooja',
    date: '30-07-2019',
    enabled: true,
    relation: {
    relationId: 4
}
},
{
    id: 6,
        displayName: 'Object Scott',
    date: '15-02-2021',
    enabled: true,
    relation: {
    relationId: 2
}
},
{
    id: 7,
        displayName: 'Object Sergey',
    date: '06-01-2020',
    enabled: true,
    relation: {
    relationId: 5
}
},
{
    id: 8,
        displayName: 'Object Adhey',
    date: '21-03-2021',
    enabled: true,
    relation: {
    relationId: 5
}
},
{
    id: 9,
        displayName: 'Object Travis',
    date: '10-08-2021',
    enabled: true,
    relation: {
    relationId: 1
}
},
{
    id: 10,
        displayName: 'Object Artem',
    date: '24-09-2021',
    enabled: false,
    relation: {
    relationId: 4
}
},
{
    id: 11,
        displayName: 'Object Stuart',
    date: '01-04-2020',
    enabled: true,
    relation: {
    relationId: 7
}
},
{
    id: 12,
        displayName: 'Object Keith',
    date: '08-05-2020',
    enabled: true,
    relation: {
    relationId: 10
}
},
{
    id: 13,
        displayName: 'Object Bill',
    date: '17-10-2020',
    enabled: true,
    relation: {
    relationId: 9
}
},
{
    id: 14,
        displayName: 'Object Chuck',
    date: '15-04-2020',
    enabled: true,
    relation: null
},
{
    id: 15,
        displayName: 'Object Joel',
    date: '09-12-2020',
    enabled: true,
    relation: null
},
{
    id: 16,
        displayName: 'Object Tim',
    date: '12-01-2020',
    enabled: true,
    relation: {
    relationId: 15
}
},
{
    id: 17,
        displayName: 'Object Tony',
    date: '05-09-2020',
    enabled: true,
    relation: {
    relationId: 7
}
},
{
    id: 18,
        displayName: 'Object Jessica',
    date: '19-07-2021',
    enabled: true,
    relation: {
    relationId: 12
}
},
{
    id: 19,
        displayName: 'Object Monica',
    date: '08-02-2021',
    enabled: true,
    relation: {
    relationId: 14
}
},
{
    id: 20,
        displayName: 'Object Tony',
    date: '05-09-2020',
    enabled: true,
    relation: {
    relationId: 7
}
}
];

const fields = [
    {
        id: 30,
        fieldName: 'Date',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 31,
        fieldName: 'Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 32,
        fieldName: 'Time',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 2
        }
    },
    {
        id: 33,
        fieldName: 'Rating',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 34,
        fieldName: 'Custom Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 35,
        fieldName: 'Email',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 19
        }
    },
    {
        id: 36,
        fieldName: 'Decimal',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 37,
        fieldName: 'Float',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 15
        }
    },
    {
        id: 38,
        fieldName: 'Radio',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 39,
        fieldName: 'Custom Rating',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 1
        }
    },
    {
        id: 40,
        fieldName: 'Relation',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 41,
        fieldName: 'Checkbox',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 42,
        fieldName: 'Checkboxes',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 43,
        fieldName: 'Dropdown',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 44,
        fieldName: 'Dynamic Tags',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 17
        }
    },
    {
        id: 45,
        fieldName: 'Files',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 46,
        fieldName: 'Long Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 20
        }
    },
    {
        id: 47,
        fieldName: 'Phone number',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 48,
        fieldName: 'Price',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 8
        }
    },
    {
        id: 49,
        fieldName: 'Status',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 50,
        fieldName: 'Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 18
        }
    },
    {
        id: 51,
        fieldName: 'Yes/No',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 15
        }
    }
];

//1
const objSorted = [...objects].sort((a,b) =>{
    let newA = a.date.split("-").reverse().join("");
    let newB = b.date.split("-").reverse().join("");
    return newA > newB ? 1: newA < newB ? -1 : 0;
})

console.log(objSorted)

//2

let result = objects.filter(({enabled}) => enabled)
// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].enabled){
//         result.push(objects[i]);
//     }
// }
//
// console.log(result)

//3
//---------- 1 for
let result = {};

for (let outerValue of objects){
    let year = outerValue.date.split('-')[2];
    result[year] = {};
    for (let innerValue of objects){
        if (innerValue.date.split('-')[2] === year){
            let month =  innerValue.date.split('-')[1]
            result[year][month] = [];
            for (let lastValue of objects){
                if (lastValue.date.split('-')[1] === month && lastValue.date.split('-')[2] === year){
                    result[year][month].push(lastValue);
                }
            }
        }
    }
}

console.log(result)

//---------- 2 map()
let result = {}

let yearEl = objects.map((value) => {
    for (let val of objects){
        let year = val.date.split('-')[2];
        if (value.date.split('-')[2] === year){
            result[year] = {};
            let monthEl = objects.map((valuem) => {
                if (value.date.split('-')[2] === valuem.date.split('-')[2]){
                    result[year][valuem.date.split('-')[1]] = [];
                    let objArr = objects.map((valuef) => {
                        if (valuef.date.split('-')[2] === value.date.split('-')[2] && valuef.date.split('-')[1] === valuem.date.split('-')[1]){
                            result[year][valuem.date.split('-')[1]].push(valuef);
                        }
                    })
                }
            })
        }
    }
})

console.log(result)

//---------- 3 reduce()
let finalResult = objects.reduce((result, value) => {
    result[value.date.split('-')[2]] = objects.reduce((month, valuem) => {
        if (valuem.date.split('-')[2] === value.date.split('-')[2]){
            month[valuem.date.split('-')[1]] = objects.reduce((final, valuef) => {
                if (valuef.date.split('-')[1] === valuem.date.split('-')[1] && valuef.date.split('-')[2] === value.date.split('-')[2]){
                    final.push(valuef);
                }
                return final;
            }, [])
        }
        return month;
    }, {})
    return result;
}, {})

console.log(finalResult)



//4

let result = objects.reduce((arr, val) => {
    if (val.relation){
        let obj = objects.find(({id}) => id === val.relation.relationId);
        val.relation.relationId = obj;
        arr.push(val)
    }
    return arr;
}, [])

// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         let indexRelation = objects[i].relation.relationId;
//         objects[i].relation.relationId = objects[indexRelation];
//         result.push(objects[i]);
//     }
// }

// console.log(result)

//5

let result = objects.filter(({relation}) => relation)

// let result = [];
// for (let i = 0; i < objects.length; i++){
//     if (objects[i].relation){
//         result.push(objects[i]);
//     }
// }

// console.log(result)

//6

//---------- 1 for
let result = {};

for (let i = 0; i < objects.length; i++){
    if (objects[i].relation){
        result[objects[i].relation.relationId] = [];
        for (let j = 0; j < objects.length; j++){
            if (objects[j].relation && objects[j].relation.relationId === objects[i].relation.relationId){
                (result[objects[i].relation.relationId]).push(objects[j])
            }
        }
    }
}

// console.log(result)

//---------- 2 map()
let result ={};
for (let val of objects){
    if (val.relation){
        result[val.relation.relationId] = objects.filter((value) => (value.relation && value.relation.relationId === val.relation.relationId))
    }
}

//---------- 3 reduce()
let result = {};
objects.reduce((fin,val) => {
    if (val.relation){
        result[val.relation.relationId] = objects.reduce((total, value) => {
            if (value.relation && value.relation.relationId === val.relation.relationId){
                total.push(value);
            }
            return total;
        }, [])
    }
},{})

//---------- 4 forEach()
let result = {};
objects.forEach((val) => {
    if (val.relation){
        result[val.relation.relationId] = [];
        objects.forEach((value) => {
            if (value.relation && value.relation.relationId === val.relation.relationId){
                result[val.relation.relationId].push(value);
            }
        })
    }
})

//7

//---------- 1 for
let result =[];
for (let val of objects){
    if (val.date.split('-')[2] == 2020){
        val.enabled = true;
        result.push(val);
    }
}

console.log(result);

//---------- 2 filter()
let result = objects.filter( (val) => +val.date.split('-')[2] === 2020)

//---------- 3 reduce()
let result = objects.reduce((total,value) => {
    if (value.date.split('-')[2] === '2020'){
        total.push(value);
    }
    return total;
}, [])

//---------- 4 forEach()
let result = [];
objects.forEach((value) => {
    if (value.date.split('-')[2] === '2020'){
        result.push(value);
    }
})

//8

let result = objects.map((val) => {
    if (val.relation){
        let obj = objects.find(({id}) => id === val.relation.relationId);
        return { ...val, enabled: obj.enabled}
    }
    return { ...val, enabled: false}
})

// function task(objects) {
//     let result = [];
//     for (let i = 0; i < objects.length; i++) {
//         if (!objects[i].relation) {
//             objects[i].enabled = false;
//             result.push(objects[i]);
//         }
//         else {
//             let id = objects[i].relation.relationId;
//             let newEnabled = objects[id-1].enabled;
//             objects[i].enabled = newEnabled;
//             result.push(objects[i]);
//         }
//     }
//     return result;
// }
// console.log(task(objects))

//9
let result;

function isRelate (val){
    return val.relation;
}

result = objects.every(isRelate);
console.log(result)

//10
let result;
function isEnabledTRue(val){
    return val.enabled;
}

result = objects.some(isEnabledTRue);
console.log(result);
