
// 3.4 Arrays 
function(array, propertyKey, propertyValue, newEmail, newName){

    for(let i = 0; i < array.length; i++){
        const currentObject = array[i]; 

        if(currentObject[propertyKey] === propertyValue){
// update that objects email to newEmail 
        currentObject.email = newEmail;
        currentObject.name = newName; 
        }
    }
    return array 
}


// Dan's explanation // 
// code here
function updateUserInfo(array, propertyKey, propertyValue, newEmail, newName ){
    // Loop through the arr
    for(let i = 0; i < array.length; i++){
     //if the current object has a property name of propertyKey that has the value of propertyValue
        
        if(array[i][propertyKey] === propertyValue){
            // update that object's email to newEmail 
            array[i].email = newEmail;
            //name properties to the values newName.
            array[i].name = newName;
    
        }
    }
    // return the array
    return array
}

var arr = [{
  name: 'James',
  email: null,
  flag: true
},{
  name: 'Dan',
  email: null,
  flag: false
},{
  name: 'JOSH',
  email: null,
  flag: true
}]

var user0 = {
  name: 'James',
  email: null,
  flag: true
}

console.log(updateUserInfo( [ user0 ], 'name', 'James', 'email@domain.com', 'Bob' ));
