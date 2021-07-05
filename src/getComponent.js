import React from 'react'

function Get() {

    const contactsGet = () => {
        fetch('http://www.raydelto.org/agenda.php').then(data => data.json()).then(data => {

            const list = document.getElementById('list')
            for (const userInfo of data) {
                const listItem = document.createElement('li')
                listItem.textContent = `Nombre: ${userInfo.nombre} Apellido: ${userInfo.apellido} Telefono: ${userInfo.telefono}`
                list.appendChild(listItem)
            }
        })
    }

    return (
        <div>
            <button onClick={contactsGet}>Get contacts</button>
        </div >
    )
}
export default Get





