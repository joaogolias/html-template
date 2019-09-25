// VARIAVEIS DAS 3 SECOES
const despesas = []
let valorTotal = 0


// FUNCOES DA SECAO DE CADASTRO
function criarObjetoDespesa() {
  return {
    valor: parseInt(document.getElementById("valor-da-despesa").value),
    descricao: document.getElementById("descrição-da-despesa").value,
    tipo: document.getElementById("tipo-da-despesa").value
  }
}

function limparFormulario() {
  document.getElementById("valor-da-despesa").value = ""
  document.getElementById("descrição-da-despesa").value = ""
  document.getElementById("tipo-da-despesa").value = ""
}

document.getElementById("cadastrar-despesa-btn").addEventListener("click", () => {
  const novaDespesa = criarObjetoDespesa()
  if (!novaDespesa.valor) {
    alert("Você precisa adicionar um valor")
    return
  }
  if (!novaDespesa.descricao || novaDespesa.descricao === " ") {
    alert("Você precisa adicionar uma descrição")
    return
  }
  if (!novaDespesa.tipo || novaDespesa.tipo === " ") {
    alert("Você precisa adicionar um tipo")
    return
  }
  despesas.push(criarObjetoDespesa())
  limparFormulario()
  console.log(despesas)
  alert("Despesa cadastrada com sucesso")

  mostrarDespesas()
  mostrarExtrato()
  calcularValorTotal()
  mostraValorTotal(valorTotal)
})


// FUNCOES DA SECAO DAS DESPESAS DETALHADAS
document.getElementById("filtrar-btn").addEventListener("click", () => {
  const tipo = document.getElementById("filtro-tipo").value
  const valorMaximo = document.getElementById("filtro-valor-maximo").value
  const valorMinimo = document.getElementById("filtro-valor-minimo").value
  limparFiltros()

  if (valorMaximo) {
      mostrarDespesas(despesas.filter((el) => {
        console.log(el.valor)
        console.log(parseFloat(el.valor) <= valorMaximo)
        return parseFloat(el.valor) <= valorMaximo
      }))
    return
  }

  if (valorMinimo) {
    mostrarDespesas(despesas.filter((el) => {
      console.log(el.valor)
      console.log(parseFloat(el.valor) >= valorMinimo)
      return parseFloat(el.valor) >= valorMinimo
    }))
    return
  }

  if (tipo) {
    mostrarDespesas(despesas.filter((el) => el.tipo === tipo))
    return
  }

})

document.getElementById("limpar-filtros-btn").addEventListener("click", () => {
  limparFiltros()
  mostrarDespesas()
})

function mostrarDespesas(lista = despesas) {
  document.getElementById("despesas-list-container").innerHTML = ""
  const itens = lista.map((despesa) => criarItemDeDespesa(despesa))

  let componentFinal = ""
  itens.forEach(item => {
    componentFinal += item
  })

  document.getElementById("despesas-list-container").innerHTML = componentFinal
}

function limparFiltros() {
  document.getElementById("filtro-tipo").value = ""
  document.getElementById("filtro-valor-maximo").value = ""
  document.getElementById("filtro-valor-minimo").value = ""
}

function criarItemDeDespesa(despesa) {
  const itemDeDespesa = `<div class="despesa-item-container"> 
                              <p class="despesa-item-info"> R$${despesa.valor} </p>
                              <p class="despesa-item-info"> Tipo: ${despesa.tipo} </p>
                              <p class="despesa-item-info"> Descrição: ${despesa.descricao}</p> 
                          </div>`

  return itemDeDespesa
}

// FUNCOES DA SECAO DAS EXTRATO

function calcularValorTotal() {
  despesas.forEach(el => valorTotal += parseFloat(el.valor))
  mostraValorTotal(valorTotal)
}

function criarItemExtrato(despesa) {
  const itemDeDespesa = `<div class="extrato-item-container"> 
                              <p class="extrato-item-info"> ${despesa.tipo} - </p>
                              <p class="extrato-item-info"> R$${despesa.valor} </p>
                          </div>`

  return itemDeDespesa
}

function mostraValorTotal(total) {
  document.getElementById("valor-total").innerHTML = `R$${total}`
}

function mostrarExtrato(lista = despesas) {
  document.getElementById("lista-do-estrato").innerHTML = ""
  const itens = lista.map((despesa) => criarItemExtrato(despesa))

  let componentFinal = ""
  itens.forEach(item => {
    componentFinal += item
  })

  document.getElementById("lista-do-estrato").innerHTML = componentFinal
}