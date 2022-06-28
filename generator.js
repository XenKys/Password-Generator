const charatters = "abcdefghijklmnpqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ1234567890!@#$%^&*.()"

function generarateRandomPassword(length) {
    let password = ""

    for (var i = 0, passwordLength = charatters.length; i < length; i++) {
        password += charatters.charAt(Math.floor(Math.random() * passwordLength))
    }
    
    return password
}

console.log(generarateRandomPassword(20))