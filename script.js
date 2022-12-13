var id = ""
var sdk = "file_sdk_"
var sdk2 = document.querySelector(".sdk .your-sdk")
var copyBTN = document.querySelector(".copy")

var codeSupports = "abcdefghijklmnopqrstuvwxyz0123456789"

// There is a 12-digit ID SDK
for (let i = 0; i < 12; i++) {
    id += codeSupports[Math.floor(Math.random() * 36)]
}

sdk += id
sdk2.innerHTML = sdk

copyBTN.onclick = () => {
    navigator.clipboard.writeText(sdk)
}