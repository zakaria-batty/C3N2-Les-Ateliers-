//ADD new To do 
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const popup = document.querySelector('.popup');
const gPop = document.querySelector('.popup-wrapper');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search input');
gPop.style.display = "none";


/***************reusable function********************/

/* Function pour l'alert et le popup qui va etre afficher (time control)*/
function start(duree) {
   var o=document.getElementById("sp");
   if(duree > 0){
      o.innerHTML = duree;
      gPop.style.display = "block";
      setTimeout("start("+duree+" -1)", 1000);
   } else{
       alert("enter a valid to do");
       o.innerHTML ="Au revoir";
       gPop.style.display="none";
      popup.style.visibility ="hidden";

}};


/* Function Creation dynamique du POPUP */

function create(){
   const div = document.createElement('div');
   div.classList.add('popup-close');
   div.setAttribute('id','closing');
   const text = document.createTextNode('X');
   div.appendChild(text);
   popup.append(div);
   const div2 = document.createElement('div');
   div2.classList.add('popup-content');
   const html = `
   <span id="sp">1</span>
   <h2>Fill the Input</h2>
   <p>Don't forget</p>
   <a href="#">Return</a>`;
   div2.innerHTML=html;
   popup.append(div2); 
   
}

/* Function generation dynamique des TODOS */

const generateTemp = todo =>{
   const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${todo}</span>
             <i class="fas fa-trash delete"></i>
            </li>
   `;  
   list.innerHTML += html;
};


/* function pour controller l'evenement et pour ne pas etre repeté à chaque clique */
function onetime(node, type, callback) {

	node.addEventListener(type, function(e) {
	
		e.target.removeEventListener(e.type, arguments.callee);

		return callback(e);
	});
}

onetime(gPop,'click',handler);

    function handler(e){
         
      if(e.target.id='closing'){
   
         gPop.style.display ="none";
   }
}

/***************Fin reusable function********************/




/************* Adding TO DO**************/

//Eventlistner Add TODOS
btn.addEventListener('click',e =>{
   e.preventDefault();
   if (addForm.add.value == ''){
      alert('You must write something');
   } else{
      generateTemp(addForm.add.value);
   }
   addForm.add.value = '';
});
/************* Fin Adding TO DO**************/
//  generateTemp(addForm.add.value);



/*************Deleting  TO DO**************/
list.addEventListener('click',e =>{

   if(e.target.classList.contains("delete")){
          confirm("voulez-vous vraiment supprimer?");
          const closing = e.target;
          const elementlist = closing.parentNode;
          list.removeChild(elementlist);
   }
});



/************* Fin Deleting  TO DO**************/




/************************************* SEARCH ITEM********************************************/
//filtering Todos :

//we will apply a class to the Todos that dont match and the that class will

// have keyup event 
 


// search.addEventListener('keyup', () =>{
//    //get value of input
//   const search_value = search.value.toUpperCase();
//   // get names ul
//   let ul = document.getElementById('names');
//   // get lis from ul
//   let li = ul.querySelectorAll('li.list-group-item');
//   //loop through list-group-item lis
//   for(let i = 0; i<li.length; i++){
//     let span = li[i].getElementsByTagName('span')[0];
//     //if matched
//     if(span.innerHTML.toUpperCase().indexOf(search_value) > -1){
//       li[i].style.display = '';
//     }else{
//       li[i].style.display = 'none';
//     }
//   }
// })
const retrieve = (term) =>{
   //function pour faire un filtre i
   let items = [];
 for ( const element of list.children){
    const item = element.innerText;
    if (item.includes(term)){
        items.push(item);
    }

   }
   console.table(items);
   console.log(list.children);
};  


//evenement de recherche des mots clés 
search.addEventListener('keyup', () =>{
   const search_value = search.value;
   retrieve(search_value);

})



/*************************************Fin SEARCH ITEM********************************************/


