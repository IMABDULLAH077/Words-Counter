let input = document.querySelector("#input_text")
let button = document.querySelector(".btn")

button.addEventListener("click", calculationsrting)


function calculationsrting() {
    let total_valu = input.value
    const TotalNum = total_valu.length
    // split space remove
    let valuu = total_valu.split(" ")
    let sub = valuu.length
    let arr = valuu
    for (let i = 1; i < arr.length; i++) {
        // Numer of Word In the String
        var val = 0
        val = arr.length
    }
    //Total Alphabet In Str
    var mai = String(arr)
    var m = mai.trim().length - (sub - 1)
    alert(`Total Character: ${TotalNum} Words: ${val} Only Alphabet Or Num: ${m}`)
}