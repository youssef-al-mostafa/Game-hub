

const getCroppedImgUrl = (url : string) => {
   const target = 'media/'
   const index = url.indexOf(target) + target.length;
   let newUrl = url.slice(0 , index ) + 'crop/600/400/' + url.slice(index) ;
   return newUrl ; 
}


export default getCroppedImgUrl ;