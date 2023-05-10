const formRegElement = document.querySelector('#reg-patient-form-new') //form para add dados
const formEditElement = document.querySelector('#reg-patient-form-edit')//form para editar
const tableNewData = document.querySelector('#new-patients-table')

let idPatient = null //variavel global para o id
//init code now
initialPage = () => {
    window.location = "clientArea.html"
}
hoverUser = () => { //modal usuario
    let hoverOptions = document.querySelector('#hover-opt-1')

    if (hoverOptions.style.display != "block") {
        hoverOptions.style.display = "block"
    } else if (hoverOptions.style.display != "none") {
        hoverOptions.style.display = "none"
    } else { hoverOptions.style.display = "none" }
}
newReg = () => { //func que abre o modal de add dados
    let openReg = document.querySelector('#modal')
    openReg.style.display = "block"
}
closeReg = () => { //fecha
    let modal = document.querySelector('#modal')
    modal.style.display = "none"
}
cancelNewReg = () => { //fecha
    let modal = document.querySelector('#modal')
    modal.style.display = "none"
}
cancelEdit = () => { //fecha
    let modal = document.querySelector('#modal-edit')
    modal.style.display = "none"
}
//buscando pelo ID de cada usuario
editDatas = async (id) => { //modal editar dados
    console.log(id)
    const requisicaoApi = await fetch(`https://thefinalproject.onrender.com/patients/${id}`)
    const formatPatient = await requisicaoApi.json()

    idPatient = id
//mostrar os dados ja existentes e edita-los
    let inpCpf = document.querySelector('#new-inp-cpf').value = formatPatient.inpCpf
    let inpName = document.querySelector('#new-inp-name').value = formatPatient.inpName
    let inpDate = document.querySelector('#new-inp-date').value = formatPatient.inpDate
    let inpEmail = document.querySelector('#new-inp-email').value = formatPatient.inpEmail
    let inpSex = document.querySelector('#new-inp-sex-choice').value = formatPatient.inpSex
    let inpNational = document.querySelector('#new-national').value = formatPatient.inpNational
    let inpNatural = document.querySelector('#new-inp-natural-country').value = formatPatient.inpNatural
    let inpProf = document.querySelector('#new-inp-profession').value = formatPatient.inpProf
    let inpSchool = document.querySelector('#new-inp-schooling').value = formatPatient.inpSchool
    let inpStatus = document.querySelector('#new-inp-status').value = formatPatient.inpStatus
    let inpMotherName = document.querySelector('#new-inp-mother-name').value = formatPatient.inpMotherName
    let inpFatherName = document.querySelector('#new-inp-father-name').value = formatPatient.inpFatherName

    let modal = document.querySelector('#modal-edit')
    modal.style.display = "block"
}
closeEdit = () => { //fecha
    let modal = document.querySelector('#modal-edit')
    modal.style.display = "none"
}
seePatient = () => { //func para levar a tela de prontuario
    window.location ='medicalRecord.html'
}
closeDatas = () => { //fecha
    let modal = document.querySelector('#modal-see-data')
    modal.style.display = "none"
}
toRegPass = () => { //func para direcionar para outra pagina
    window.location ='regPassword.html'
}
registered = () => {//func para direcionar para outra pagina
    window.location ='clientArea.html'
}
medicalInfo = () => {//func para direcionar para outra pagina
    window.location ='sectionArea.html'
}
modalSec = () => { //modal de opçoes de edição da seção e fatos
    let modal = document.querySelector('#hover-opt-sec')
    if (modal.style.display != "block") {
        modal.style.display = "block"
    } else if (modal.style.display != "none") {
        modal.style.display = "none"
    } else { modal.style.display = "none" }
}
login = () => {
    alert('to login to next page you need to click on *Cadastre-se gratuitamente* and finish the fake register!')
}
//section functions bottom
newDataSec = () => {//modal sessao
    let modal = document.querySelector('#modal-section')
    modal.style.display = "block"
}
closeModalSec = () => {
    let modal = document.querySelector('#modal-section')
    modal.style.display = "none"
}
newFactSec = () => {
    let modal = document.querySelector('#modal-fact')
    modal.style.display = "block"
}
closeFactSec = () => {
    let modal = document.querySelector('#modal-fact')
    modal.style.display = "none"
}

//consumindo a api
const consumo = async () => { //adicionando dados do paciente
    const urlAPI = await fetch('https://thefinalproject.onrender.com/patients')//diretorio => /patients
    
    let infoPatient = await urlAPI.json()
    render(infoPatient)
    //select the table
    /*
    const theTable = document.querySelector('#new-patients-table')
    //increment the lines with the new informations
    infoPatient.forEach(choiceItem => {
        theTable.innerHTML +=
            `
            <tr>
                <td>${choiceItem.id}</td>
                <td>${choiceItem.inpName}</td>
                <td>${choiceItem.inpCpf}</td>
                <td id="btn-chng">
                    <div id="btn-see" class="btn-api-chng">
                        <img onclick="seePatient(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-look.png" alt="see data">
                    </div>
                    <div id="btn-updt" class="btn-api-chng">
                        <img onclick="editDatas(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-edit.png" alt="edit">
                    </div>
                    <div id="btn-del" class="btn-api-chng">
                        <img onclick="deleteAll(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-delete.png" alt="clean">
                    </div>
                </td>
            </tr>       
            `
    })
    */
}
consumo()

render = () => {
    const theTable = document.querySelector('#new-patients-table')
    //increment the lines with the new informations
    infoPatient.forEach(choiceItem => {
        theTable.innerHTML +=
            `
            <tr>
                <td>${choiceItem.id}</td>
                <td>${choiceItem.inpName}</td>
                <td>${choiceItem.inpCpf}</td>
                <td id="btn-chng">
                    <div id="btn-see" class="btn-api-chng">
                        <img onclick="seePatient(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-look.png" alt="see data">
                    </div>
                    <div id="btn-updt" class="btn-api-chng">
                        <img onclick="editDatas(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-edit.png" alt="edit">
                    </div>
                    <div id="btn-del" class="btn-api-chng">
                        <img onclick="deleteAll(${choiceItem.id})" class="icons-edit" src="styles/imgs/icon-delete.png" alt="clean">
                    </div>
                </td>
            </tr>       
            `
    })
}
render()

//creating a new register - função para confirmar e enviar os dados adicionados para o json
formRegElement.addEventListener('submit',
    createPost = async (eventInfo) => {
        //previnindo o evento padrao do form "usando preventDefault no parametro"
        eventInfo.preventDefault()

        let inpCpf = document.querySelector('#inp-cpf').value
        let inpName = document.querySelector('#inp-name').value
        let inpDate = document.querySelector('#inp-date').value
        let inpEmail = document.querySelector('#inp-email').value
        let inpSex = document.querySelector('#inp-sex-choice').value
        let inpNational = document.querySelector('#national').value
        let inpNatural = document.querySelector('#inp-natural-country').value
        let inpProf = document.querySelector('#inp-profession').value
        let inpSchool = document.querySelector('#inp-schooling').value
        let inpStatus = document.querySelector('#inp-status').value
        let inpMotherName = document.querySelector('#inp-mother-name').value
        let inpFatherName = document.querySelector('#inp-father-name').value
        const newDataPatient = {
            //syntax sugar
            inpCpf,
            inpName,
            inpDate,
            inpEmail,
            inpSex,
            inpNational,
            inpNatural,
            inpProf,
            inpSchool,
            inpStatus,
            inpMotherName,
            inpFatherName
        }
        console.log(newDataPatient)
        await postPatient(newDataPatient)
    })
/*
    const urlAPI = await fetch('http://localhost:3000/patients')
    let infoPatient = await urlAPI.json()
*/
postPatient = async (patient) => {
    const urlAPI = `https://thefinalproject.onrender.com/patients`
    //endereço para o qual será enviado os dados
    await fetch(urlAPI, {
        //method ===> define o tipo de metodo, get, post, delete ou etc. (o que fazer com o tipo de "dados")
        method: 'POST',
        //JSON.stringify(transforma o elemento em string)
        //enviar as informações do corpo
        body: JSON.stringify(patient),
        //no cabeçalho indica qual o tipo de conteudo que estamos enviando.
        headers: {
            'Content-Type': 'application/json',
            //aqui definiremos qual o tipo de resposta aceitaremos do servidor.
            'Accept': 'application/json'
        }
    })
    window.location.reload()
}

formEditElement.addEventListener('submit',  
    updateDatas = async (event) => {
        event.preventDefault()
        console.log('INICIO')
        const urlAPI = await fetch(`https://thefinalproject.onrender.com/patients/${idPatient}`)
        const formatPatient = await urlAPI.json()
            idPatient = formatPatient

        let inpCpf = document.querySelector('#new-inp-cpf').value
        let inpName = document.querySelector('#new-inp-name').value
        let inpDate = document.querySelector('#new-inp-date').value
        let inpEmail = document.querySelector('#new-inp-email').value
        let inpSex = document.querySelector('#new-inp-sex-choice').value
        let inpNational = document.querySelector('#new-national').value
        let inpNatural = document.querySelector('#new-inp-natural-country').value
        let inpProf = document.querySelector('#new-inp-profession').value
        let inpSchool = document.querySelector('#new-inp-schooling').value
        let inpStatus = document.querySelector('#new-inp-status').value
        let inpMotherName = document.querySelector('#new-inp-mother-name').value
        let inpFatherName = document.querySelector('#new-inp-father-name').value

//aqui recebera os dados modificados
        const inpModify = {
            inpCpf,
            inpName,
            inpDate,
            inpEmail,
            inpSex,
            inpNational,
            inpNatural,
            inpProf,
            inpSchool,
            inpStatus,
            inpMotherName,
            inpFatherName,
        }
        console.log(inpModify, idPatient)
        if (idPatient) {
            inpModify.id = idPatient.id
//seleciona id e armazena os dados atualizados
            saveUpdate(idPatient.id, inpModify)
        } else {
//envia os dados modificados para o db ja alterados
            postPatient(inpModify)
        }
        console.log(inpModify)
})
    saveUpdate = async (id, updtItem) => {
        console.log('INICIO')
        await fetch (`https://thefinalproject.onrender.com/patients/${id}`, {
            method: 'PUT',

//o erro estava aqui no HEADER 2 horas pra achar esse problema KKKKK
            headers: {
                'Content-Type': 'application/json'
            },
//nao inverter a linha do tempo do header
        
            body: JSON.stringify(updtItem)
        })
        window.location.reload()
}
//delete itens

const deleteAll = async (id, delData) => {
    await fetch(`https://thefinalproject.onrender.com/patients/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(delData)
    })
    window.location.reload()
  }

  filtroPesquisa = async() => {
    const inpFilter = document.querySelector('#inp-search')
    const search = inpFilter.value
    const requisition = await fetch (`https://thefinalproject.onrender.com/patients?inpName_like=${search}`)
    const apiUrl = await requisition.json()

  }
  