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
let result = fields.filter((val) => val.permissions.view);
console.log(result)


//2
let result = fields.filter((val) => !val.permissions.view && !val.permissions.edit && !val.permissions.remove);
console.log(result)


//3
let result = fields.map((value) => {
    if (value.objectRelation){
        let obj = objects.find(({id}) => id === value.objectRelation.objectId)
        return { ...value, objectRelation: {objectId: obj} }
    }
    return value;
})
console.log(result)

// let result = fields.map((value) => {
//     if (value.objectRelation){
//         value.objectRelation.objectId = objects[(value.objectRelation.objectId)-1];
//         return value;
//     }
//     return value;
// })


//4
let result = fields.reduce((arr, val) => {
    if (val.objectRelation){
        let obj = objects.find(({id}) => id === val.objectRelation.objectId);
        if (obj.enabled){
            return [ ...arr,{ ...val, permissions:{view: true, edit: true, remove: true}}]
        }
        else {
            return [ ...arr,{ ...val, permissions:{view: false, edit: false, remove: false}}]
        }
    }
    else {
        return arr;
    }
}, [])

console.log(result)
// let result = fields.map((value) =>{
//     if (!value.objectRelation){
//         return value;
//     }
//     else{
//         for (let val of objects){
//             if (value.objectRelation.objectId === val.id && val.enabled){
//                 value.permissions.view = true;
//                 value.permissions.edit = true;
//                 value.permissions.remove = true;
//                 return value;
//             }
//             else if (value.objectRelation.objectId === val.id){
//                 value.permissions.view = false;
//                 value.permissions.edit = false;
//                 value.permissions.remove = false;
//                 return value;
//             }
//         }
//     }
// })


//5
let result = [];
let ids = fields.reduce((ids, value) => {
    if (value.objectRelation && !(ids.includes(value.objectRelation.objectId))){
        return [ ...ids, value.objectRelation.objectId]
    }
    return ids;
}, []);

for (let value of objects){
    if (ids.includes(value.id)){
        result.push(value)
    }
}
console.log(result)


//6

let result = fields.reduce((obj, val) => {
    if (val.objectRelation){
        let id = val.objectRelation.objectId
        let idObj = {}
        idObj[val.id] = val.permissions;
        if(obj[id]){
            obj[id].push(idObj)
        }
        else {
            obj[id] =[idObj];
        }
    }
    return obj;
}, {})

console.log(result)

// let result = {};
// for (let val of fields){
//     if (val.objectRelation){
//         result[val.objectRelation.objectId] = [];
//         for (let value of fields){
//             if (value.objectRelation && value.objectRelation.objectId === val.objectRelation.objectId){
//                 let newObj = {};
//                 newObj[value.id] = value.permissions;
//                 result[val.objectRelation.objectId].push(newObj);
//             }
//         }
//     }
// }
//
// console.log(result);


//7
let result = fields.map((value) => {
    if ( value.permissions.view){
        return { ...value, permissions:{ ...value.permissions, edit: true}}
    }
    return value;
} )
console.log(result)

// let result = fields.map((value) => {
//     if ( value.permissions.view){
//         value.permissions.edit = true;
//     }
//     return value;
// } )
// console.log(result)


//8
let final = fields.reduce((obj, value) =>{
    if (value.objectRelation){
        value.relations = true;
        obj.push(value)
    }
    return obj;
},[])

console.log(final)

// let result = fields.filter(value => value.objectRelation).map((value) =>{
//     value.relations = true;
//     return value;
// } )
// console.log(result)


//9
let result = fields.sort((a,b) =>{
    a = a.fieldName;
    b = b.fieldName;
    return a > b ? 1 : a < b ? -1 : 0;
})

console.log(result)


//10
let result = fields.some((value) => value.permissions.edit && value.permissions.view && value.permissions.remove)

console.log(result)

// let result;
// for (let val of fields){
//     if (val.permissions.edit && val.permissions.view && val.permissions.remove){
//        result = true;
//        break;
//     }
//     else result = false;
// }
//
// console.log(result)