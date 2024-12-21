import noImage from '../assets/no-image-placeholder.webp' ; 

const getCroppedImgUrl = (url : string) => {
   if(!url) return noImage; 
   const target = 'media/'
   const index = url.indexOf(target) + target.length;
   let newUrl = url.slice(0 , index ) + 'crop/600/400/' + url.slice(index) ;
   return newUrl ; 
}


export default getCroppedImgUrl ;