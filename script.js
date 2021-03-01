$(document).ready(() => {
    $('#btnOn').click(( ) => { 
         $('.circuloOff').toggleClass('circuloOn circuloOff')
    })   
    
    $('#btnOff').click(( ) => { 
        $('.circuloOn').toggleClass('circuloOn circuloOff')
   })  

})
