fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))



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


  // Collectiong & organizing users Realname through json



  // Collectiong & organizing users Realname through json