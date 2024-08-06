
function getPost(userId){
    fetch( "https://jsonplaceholder.typicode.com/posts?userId=" + userId)
.then((response) => {
    if(response.ok){
        return  response.json()
    }
})  
.then((posts) => {
    document.getElementById("posts").innerHTML = ""
            for(post of posts){
                let content = `
                <div id="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                `
                document.getElementById("posts").innerHTML += content
            }   
});

}
// getPost(1);
function getUsers(){

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    if(response.ok){
    return  response.json()
    }
})  
.then((users) => {
    document.getElementById("users").innerHTML = ""
    for(user of users){
        let content = `
    <div id="user" onclick="userClicked(${user.id} , this)">
        <h3>${user.name}</h3>
        <h3>${user.email}</h3>
    </div>
        `
        document.getElementById("users").innerHTML += content
    }   
});

}
// getUsers()
function getUsersUsingAxios(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        let users = response.data
        document.getElementById("users").innerHTML = ""
        for(user of users){
            let content = `
        <div id="user" onclick="userClicked(${user.id} , this)">
            <h3>${user.name}</h3>
            <h3>${user.email}</h3>
        </div>
            `
            document.getElementById("users").innerHTML += content
        }   
    })
    .catch((error)=>{
        console.log(error)
    })
}
getUsersUsingAxios()

function getPostOfUser(id){
    axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id)
    .then((response)=>{
        let posts = response.data
        document.getElementById("posts").innerHTML = ""
        for(post of posts){
            let content = `
        <div id="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
            `
            document.getElementById("posts").innerHTML += content
        }   
    })
    .catch((error)=>{
        console.log(error)
    })
}
getPostOfUser(1)
function userClicked(id , element){
    getPost(id);
    let users = document.getElementsByClassName("selected");
    for(user of users){
        user.classList.remove("selected");
    }
    element.classList.add("selected");
}
