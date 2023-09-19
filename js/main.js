let btns = document.querySelectorAll(".btn")
let operation = document.querySelector("#operation")
let btnEqual = document.querySelector("<3btn-equal")
let btnDelete = document.querySelector("#btn-delete")

for(let btn of btns){
  btn.addEventListener("click", e => {
    operation.value += e.target.innerHTML
  })
}

btnEqual.addEventListener("click", ()=>{
  let result

  try {

    result = eval(operation.value)

    if(result == NaN){
      return alert("La operacion no se puede realizar")
    }

    operation.value = result
    
  } catch (error) {
    alert("La operacion no es valida")
  }
})

btnDelete.addEventListener("click", ()=>{
  operation.value = operation.value.substring(0, operation.value.length - 1)
})
