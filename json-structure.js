const user = {
    id: 14,
    name: "masum",
    father:{
        name : "Richard",
        age : 40, 

         
        country: 'UK'
    },
    friendsName: ['David', 'Rick', 'Nick'],
    friendsAge :[12,24,34]
};
const userJSON = JSON.stringify(user);
console.log(userJSON);
const userFromJson = JSON.parse(userJSON);
console.log(userFromJson);