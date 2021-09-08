window.onload=function()
{
    var res = JSON.parse(localStorage.getItem("productInfo"))
    // console.log(res)
    result = ""
    if(res!=null){
        for (var i = 0; i < res.length; i++) {
            result += `
                <tr>
                <th scope="row">${res[i][0]}</th>
                <td>${res[i][1]}</td>
                <td>${res[i][2]}</td>
                <td>${res[i][3]}</td>
                <td><input type="button" value="Delete" onclick="deleteItem(${i})"></td>
              </tr> `
        }
    }

    document.getElementById("dynamicRow").innerHTML = result
}
function addInLocalStorage() {
    var arr = []
    pId = document.getElementById("pId").value
    if (pId==""){
        arr.push("None")
    }
    else{
        arr.push(pId)
    }
    pName = document.getElementById("pName").value
    if (pName==""){
        arr.push("None")
    }
    else{
        arr.push(pName)
    }
    pValue = document.getElementById("pValue").value
    if (pValue==""){
        arr.push("None")
    }
    else{
        arr.push(pValue)
    }
    pdescription = document.getElementById("pdescription").value
    if (pdescription==""){
        arr.push("None")
    }
    else{
        arr.push(pdescription)
    }
    var productInfo = JSON.parse(localStorage.getItem('productInfo'))
    if (productInfo == null) {
        pInfo = []
    }
    else {
        pInfo = productInfo
    }
    pInfo.push(arr)
    localStorage.setItem('productInfo', JSON.stringify(pInfo))
    onload()
}
function resetItem(){
    document.getElementById("pId").value = ""
    document.getElementById("pName").value = ""
    document.getElementById("pValue").value = ""
    document.getElementById("pdescription").value = ""
}
function clearAll(){
    alert("are you sure to clear all record")
    {
        localStorage.clear()
        onload()
    }
}

function deleteItem(no){
    console.log("hellogvgfvtgvgvbgbygbghyghybh"+no)
    var res=JSON.parse(localStorage.getItem("productInfo"))
    console.log(res)
    res.splice(no,1)
    localStorage.setItem("productInfo",JSON.stringify(res))
    onload()
    
}
