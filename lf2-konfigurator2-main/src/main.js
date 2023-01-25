let swiperContainer = document.getElementById("swiperContainer")
let test = document.getElementById("category-container")
let itemContainer1 = document.getElementById("itemContainer1")
let itemContainer2 = document.getElementById("itemContainer2")
let classList1 = itemContainer1.classList
let classList2 = itemContainer2.classList

function moveElement(element) {
    let currentItem = element.cloneNode(true)
    if (itemContainer1.childNodes.length === 0) {
        itemContainer1.appendChild(currentItem)
        itemContainer1.setAttribute("class", "")
        currentItem.classList.toggle("mr-36")
        currentItem.classList.toggle("bg-gray-100")
    } else {
        itemContainer2.appendChild(currentItem)
        itemContainer2.setAttribute("class", "")
        currentItem.classList.toggle("bg-gray-100")
    }
}

function empty() {
    itemContainer1.replaceChildren()
    itemContainer2.replaceChildren()
    itemContainer1.classList.add('border-2', 'border-gray-300', 'rounded-lg', 'min-w-[240px]', 'max-w-[275px]', 'min-h-[507px]', 'bg-gray-100', 'shadow-md', 'hover:shadow-2xl', 'cursor-pointer',  'mr-36')
    itemContainer2.classList.add('border-2', 'border-gray-300', 'rounded-lg', 'min-w-[240px]', 'max-w-[275px]', 'min-h-[507px]', 'bg-gray-100', 'shadow-md', 'hover:shadow-2xl', 'cursor-pointer')
}

function compare() {
    let item1 = itemContainer1.firstChild
    let item2 = itemContainer2.firstChild
    //console.log(item1)

    let itemValue1 = item1.childNodes.item(7).textContent
    let itemValue2 = item1.childNodes.item(9).textContent
    //console.log(itemValue1)

    let item2Value1 = item2.childNodes.item(7).textContent
    let item2Value2 = item2.childNodes.item(9).textContent

    let value1_1 = itemValue1.replace(",", ".")
    let value1 = value1_1.replace("€", "")
    console.log(value1)
    let value2_1 = itemValue2.replace(",", ".")
    let value2 = value2_1.replace("kWh", "")
    console.log(value2)

    let value1_2 = item2Value1.replace(",", ".")
    let value3 = value1_2.replace("€", "")

    let value2_2 = item2Value2.replace(",", ".")
    let value4 = value2_2.replace("kWh", "")

    let result1 = Math.max(value1, value3)
    let result2 = Math.min(value2, value4)
    console.log(result2)
    if (result1 === parseFloat(value1)) {
        let winner = item1.childNodes.item(7)
        if (winner === item1.childNodes.item(7)) {
            winner.classList.toggle("bg-green-400")
        } else {
            item2.childNodes.item(7).classList.toggle("bg-green-400")
        }
    } else {
        let winner = item2.childNodes.item(7)
        winner.classList.toggle("bg-green-400")
        //console.log(winner)
    }

    if (result2 === parseFloat(value2)) {
        let winner = item1.childNodes.item(9)
        winner.classList.toggle("bg-green-400")
        //console.log(winner)
    }  else {
        let winner = item2.childNodes.item(9)
        winner.classList.toggle("bg-green-400")
        //console.log(winner)
    }
    
}