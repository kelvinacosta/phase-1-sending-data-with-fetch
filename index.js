// Add your code here
 function submitData (name,email){
    
    const formData = {
        name,
        email
    }
    
    const configurationObj = {
        method:"POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
        body: JSON.stringify(formData),
        
    }
    
    return fetch('http://localhost:3000/users',configurationObj)
    .then(res => res.json())
    .then(data => {
        const id = data.id
        document.body.append(id)
    })
    .catch(error => {
        const errorMessage = error.message;
        document.body.append(errorMessage)
    })
}
