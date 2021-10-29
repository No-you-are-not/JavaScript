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
let result = [];
for (let i = 0; i < objects.length; i++){
    if (objects[i].enabled === true){
        result.push(objects[i]);
    }
}

console.log(result)

//3
let result = {};

for (let i = 0; i < objects.length; i++){
    let year = objects[i].date.split('-')[2];
    result[year] = {};
    //let month =  objects[i].date.split('-')[1];
    for (let j = 0; j < objects.length; j++){
        if (+(objects[j].date.split('-')[2]) === +year){
            let month =  objects[j].date.split('-')[1]
            result[year][month] = objects[j];
        }
    }
}
console.log(result)


//4
let result = [];
for (let i = 0; i < objects.length; i++){
    if (objects[i].relation){
        let indexRelation = objects[i].relation.relationId;
        objects[i].relation.relationId = objects[indexRelation];
        result.push(objects[i]);
    }
}

console.log(result)

//5
let result = [];
for (let i = 0; i < objects.length; i++){
    if (objects[i].relation){
        result.push(objects[i]);
    }
}

console.log(result)

//6
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

console.log(result)
//7
let result =[];
for (let i = 0; i < objects.length; i++){
    if (objects[i].date.split('-')[2] == 2020){
        objects[i].enabled = true;
        result.push(objects[i]);
    }
}

console.log(result);

//8
function task(objects) {
    let result = [];
    for (let i = 0; i < objects.length; i++) {
        if (!objects[i].relation) {
            objects[i].enabled = false;
            result.push(objects[i]);
        }
        else {
            let id = objects[i].relation.relationId;
            let newEnabled = objects[id-1].enabled;
            objects[i].enabled = newEnabled;
            result.push(objects[i]);
        }
    }
    return result;
}
console.log(task(objects))

//9
let result;
for (let i = 0; i < objects.length; i++){
    if (objects[i].relation){
        result = true;
    }
    else {
        result = false;
        break;
    }
}

console.log(result);

//10
let result;
for (let i = 0; i < objects.length; i++){
if (objects[i].enabled){
    result = true;
    break;
}
else {
    result = false;
}
}

console.log(result);
