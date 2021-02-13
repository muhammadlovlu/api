document.getElementById('submit').addEventListener('click', function(){
const titleData = document.getElementById('title').value;
const contentData = document.getElementById('content').value;
const post = {title:titleData, content:contentData};
postToServer(post);
})


function postToServer(newPost){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data));
}