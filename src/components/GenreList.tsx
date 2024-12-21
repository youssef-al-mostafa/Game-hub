import { Button, HStack, Image, List, ListItem, Spinner, Text , Heading} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImgUrl from "../services/img-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  // @ts-ignore
  if (isLoading) return <Spinner />;
  return (
    // @ts-ignore
    <>
      <Heading paddingBottom={4} fontSize={25}>Genres</Heading>
      <List>
        {data.map(genre =>
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImgUrl(genre.image_background)} />
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : "normal"} onClick={() => onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>)}
      </List>
    </>
  )
}

export default GenreList; 
