import { Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";

const GenreList = () => {
  const {data} = useGenre(); 
  return (
    <ul>
      
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default  GenreList ; 
