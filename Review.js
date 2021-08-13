// var benda = Boolean(``)
// console.log(benda)

// var abc = `AbC`.split (``)
// // abc.reverse()
// abc.reverse ()
// // abc = abc.join(``)
// console.log(abc)

const cekPassword = (password) => {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`.split(``)
    const angka = `0123456789`.split (``)
    let adaAngka = false
    let adaHuruf = false
    password = password.replace(` `,``)
    if (password.length < 6){
        return `harus 6 caracter atau lebih`
    }
    for(let i = 0 ; i < password.length ; i++){
        var element = password[i];
        for (let j = 0 ; j < password.length ; j++){
            if(element == alphabet [j].toLowerCase()|| element == adaHuruf)
            adaHuruf = true
        }
    
        for(let k = 0 ; k < password.length ; k++){
            if (element === angka[k]){
            adaAngka = true
            }
        }
    }
    if (adaAngka && adaHuruf){
        return `bisa lewat`
    } else if (adaAngka){
        return `harus ada hurufnya`
    } else{
        return `harus ada angkanya`
    }
  
}
console.log (cekPassword(`abc a`))
console.log (cekPassword(`1234567`))
console.log (cekPassword(`abcasdff`))
console.log (cekPassword(`abcasasa1`))


console.log(fungsiku(`kata`)) // K aa ttt aaaa