window.onload = function () {

    document.getElementById('addButton')
        .addEventListener('click', function () {
            const name = document.getElementById('nameTxt').value
            const category = document.getElementById('categoryTxt').value
            const qty = document.getElementById('qtyTxt').value

            const table = document.getElementById('itemTable');
            let row = table.insertRow();

            let nameCell = row.insertCell();
            let nameData = document.createTextNode(name);
            nameCell.appendChild(nameData)

            let catCell = row.insertCell();
            let catData = document.createTextNode(category);
            catCell.appendChild(catData)

            let qtyCell = row.insertCell();
            let qtyData = document.createTextNode(qty);
            qtyCell.appendChild(qtyData)

            let removeCell = row.insertCell();
            let button = document.createElement('input')
            button.setAttribute('type', 'button')
            button.value = 'Remove';
            button.onclick = function () {
                const selectedRow = this.parentNode.parentNode;
                selectedRow.parentNode.removeChild(selectedRow)
            }
            removeCell.appendChild(button)

        })

    document.getElementById('filterButton')
        .addEventListener('click', function () {

            let table = document.getElementById('itemTable');
            let rows = document.getElementsByTagName('tr')

            for (let i = 1; i < rows.length; i++) {
               // rows[i].style.display='block'
                let td = rows[i].getElementsByTagName('td')[2]
               
                if (td.innerText < 100) {
                    rows[i].style.display = 'none'
                }
            }

        })

    const select = document.getElementById('sortSelect')
    select.addEventListener('change', function () {
        const value = this.options[this.selectedIndex].value
        console.log(value)
    })

    document.getElementById('qtyTxt').addEventListener('keyup', function(){
        let value = this.value;
        if(isNaN(value)){
            this.style.backgroundColor='red'
        }else{
            this.style.backgroundColor='white'
        }
        
    })

    const table = document.getElementById('itemTable');
    table.addEventListener('click', function(){
        console.log('mouse')
    })


}