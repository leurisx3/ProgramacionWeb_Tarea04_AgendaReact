import React from 'react'

function Post() {

    const contactPost = () => {
        const name = document.getElementById('name')
        const lastName = document.getElementById('lastName')
        const phone = document.getElementById('phone')

        const newContact = {
            nombre: name.value,
            apellido: lastName.value,
            telefono: phone.value,
        }

        fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                "content-type": "text/plain"
            }
        }).then(res => res.json()).then(res => console.log(res))
    }

    return (
        <div>
            <button onClick={contactPost}>Post contact</button>
        </div >
    )
}
export default Post





