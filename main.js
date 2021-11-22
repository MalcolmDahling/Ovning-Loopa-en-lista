array = [];
idNumber = 0;

let ul = document.createElement('ul');


document.body.append( ul );
ul.id = 'ul';

function createListItem(){
    let li = document.createElement('li');
    li.innerHTML = array[idNumber];
    li.id = idNumber;
    
    ul.append(li);

    if(idNumber % 2){
        document.getElementById(idNumber).style.backgroundColor = '#827E7F';
    }

    idNumber++;
}



document.getElementById('button').addEventListener('click', function(){
    array.push( document.getElementById('input').value );
    document.getElementById('input').value = '';
    
    createListItem();
    
});

