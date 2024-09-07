export default function capitalizeFirstLetter(string){
   return string.split('').map((character,index)=>{
    if(index === 0){
        return character.toUpperCase()
    }else{
        return character
    }
    }).join('')
}