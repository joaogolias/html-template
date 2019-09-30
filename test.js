const array = [5, 6, 7, 8, 1, 4, 5, 10, -1 , -9, 24]

// saida maior = 8 ; segundo maior = 7

let greatest = 0
let secondGreatest = 0

array.forEach((e) => {
  if(e >= greatest) {
    secondGreatest = greatest
    greatest = e
  }
})

console.log(greatest)
console.log(secondGreatest)








// let valorMax = 1000
// let valorMin = 0
// let tipo = "casa"


// const despesas = [
//   { valor: 40, descricao: "Minha despesa", tipo: "casa" },
//   { valor: 160, descricao: "Minha despesa", tipo: "trabalho" }
// ]


// // item atual: tipo=trabalho
// const filtradas = array.filter((despesa) => {
//   if(Number(valorMax) !== 0) {
//     if(despesa.valor < valorMax)  {
//       return true
//     }
//     return false
//   }

//   if(Number(valorMin) !== 0) {
//     if(despesa.valor > valorMin) {
//       return true
//     }
//     return false
//   }

//   if(despesa.tipo === tipo) {
//     return true
//   } 
//   return false

// })

// // filtradas = [ { tipo: "casa" }]

// mostrarHtml(filtradas)




