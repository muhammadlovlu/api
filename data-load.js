// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))



// Collectiong & organizing users "REALNAME" through json
fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => showRealNames(json))

function showRealNames(names) {
  const realNames = names.map(x => x.name);
  const nameUL = document.getElementById('name-container');
  for (let i = 0; i < realNames.length; i++) {
    const realname = realNames[i];
    const li = document.createElement("li");
    li.innerText = realname;
    nameUL.appendChild(li);
  }
}


// Collectiong & organizing users "EMAIL" through json
fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => allMail(json))

function allMail(usersmail) {
  const mailCollect = usersmail.map(x => x.email);
  const mailUl = document.getElementById("mail-container");
  for (let i = 0; i < mailCollect.length; i++) {
    const element = mailCollect[i];
    const li = document.createElement("li");
    li.innerText = element;
    mailUl.appendChild(li);
  }
}


// Collectiong & organizing users "USERNAME" through json
fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json))

function displayUser(allusers) {
  const userNames = allusers.map(x => x.username);
  const ul = document.getElementById("username-container");
  for (let i = 0; i < userNames.length; i++) {
    const username = userNames[i];
    const li = document.createElement('li');
    li.innerText = username;
    ul.appendChild(li);
  }
}


  // Collectiong & organizing users "STREET" through json
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => Street(json))


  function Street(street){
    const usersStreet = street.map(x=> x.address.street);
    const strUL = document.getElementById("str-container");
    for (let i = 0; i < usersStreet.length; i++) {
      const str = usersStreet[i];
      const li = document.createElement("li");
      li.innerText = str;
      strUL.appendChild(li);
    }
  }


  // Collectiong & organizing users "ZIPCODE" through json
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => usersZipCode(json))

  function usersZipCode(zip){
    const zipCode = zip.map(x => x.address.zipcode);
    const ul = document.getElementById("zip-container");
    for (let i = 0; i < zipCode.length; i++) {
      const codeZip = zipCode[i];
      const li = document.createElement("li");
      li.innerText = codeZip;
      ul.appendChild(li);
      
    }
  }