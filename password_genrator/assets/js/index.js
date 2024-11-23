
const input = document.querySelector('.input')
const range = document.querySelector('.range')
const numaric = document.querySelector('.numaric')
const specialChar = document.querySelector('.specialChar')


range.value = 6

range.addEventListener('change',(e)=>{
        range.value = e.target.value
        input.value = genPass(range.value);  
   })

   numaric.addEventListener('click',()=>{
      if(numaric.checked){
         input.value = genPass(range.value);
      }else{
          input.value = genPass(range.value);
      }
   })
specialChar.addEventListener('click',()=>{
   if(specialChar.checked){
         input.value = genPass(range.value);
      }else{
          input.value = genPass(range.value);
      }
})

function genPass(value){
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let password = ''
    if(numaric.checked){
     str = str + 1234567890
    }
    if(specialChar.checked){
      str = str + '!@#$%^&*()'
    }
    for (let index = 0; index <=range.value; index++) {
      const char =   Math.floor(Math.random()*str.length + 1);
      password = password + str.charAt(char) 
   }
   return password;
   }

input.value = genPass(range.value); 



