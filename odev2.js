     

let listItems = document.querySelectorAll("#list li")

listItems.forEach(items =>{
    
    items.addEventListener('click' , function(){

        this.classList.toggle('checked')
    })
})

//li elementi ekleme

const addText = document.querySelector("#addText")
const myList = document.querySelector("#list")
const alertDom = document.querySelector("#alert")
const alertAdd = document.querySelector("#alert")

let alertFunction = () => `<div class="alert alert-danger" role="alert">
  Bu alan boş bırakılamaz!!!
</div>`
let alertAddFunc = () => `<div class="alert alert-primary" role="alert">
  Listeye Eklendi.
</div>`

let newElement = () =>{

    const inputValue = addText.value;

    if (inputValue.trim() !== "") {
        const newItem = document.createElement('li')
        
        newItem.classList.add('list-group-item', 'pl-5', 'border-0')
        
        newItem.addEventListener('click',function(){
            this.classList.toggle('checked')
        })

        myList.append(newItem)

        newItem.textContent = inputValue

        alertAdd.innerHTML = alertAddFunc()

        const successAlert = alertAdd.querySelector(".alert");

        setTimeout(() => {
            successAlert.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            alertAdd.innerHTML = "";
        }, 3000);

        addText.value = "";

        // Tıklanınca <li> kaldırılır

        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
        closeButton.addEventListener('click', () => {
            newItem.remove(); 
        });
        newItem.appendChild(closeButton);

    }else{
        alertDom.innerHTML = alertFunction()

        const errorAlert = alertDom.querySelector(".alert");

         setTimeout(() => {
            errorAlert.classList.add("fade-out");
        }, 2000);

        setTimeout(() => {
            alertDom.innerHTML = "";
        }, 3000);
    }

}

let removeElement = (even) => {
    const removeLi = even.parentElement
    removeLi.remove()
}
