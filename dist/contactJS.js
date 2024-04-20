let clicked=false;
function displayMenu(){
    if(clicked === false){
         
         document.getElementById('menu-bar').classList.remove('hidden');
         clicked=true;

    }else{
      
         document.getElementById('menu-bar').classList.add('hidden');
         clicked=false;
    }
   
}
