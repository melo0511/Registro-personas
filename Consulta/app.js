window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://backend-edw.herokuapp.com/usuarios')
    .then(response=>response.json())
    .then(response=>console.log(response))
})

const Newusername = document.getElementById('Newusername')
const Newpassword = document.getElementById('Newpassword')
const NewnameU = document.getElementById('NewnameU')

const LogIn = document.getElementById('LogIn')

LogIn.addEventListener('click',user)

    let saveNewusername = Newusername.value
    let saveNewpassword = Newpassword.value
    let saveName = NewnameU.value

function user(){

    const object = {
        username: saveNewusername,
        password: saveNewpassword,
        name: saveName
    }

    newUser(object)
}

function newUser(object){

    let newObject = JSON.stringify(object)

    fetch('https://backend-edw.herokuapp.com/usuario',{
        method: 'POST',
        body: newObject,
        headers:{
            "Content-type": "application/json"
        }
    })

}