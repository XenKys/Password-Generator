const charatters = "abcdefghijklmnpqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ1234567890"

function generarateRandomPassword(length) {
    let password = ""

    for (var i = 0, passwordLength = passwordCharatters.length; i < length; i++) {
        password += passwordCharatters.charAt(Math.floor(Math.random() * passwordLength))
    }
    
    return password
}

console.log(generarateRandomPassword(32))