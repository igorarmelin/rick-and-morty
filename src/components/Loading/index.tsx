import { LoadingProps } from "./interfaces"
import {
  LoadingStyled,
  ContainerStyled,
  CircularIconStyled,
  LogoStyled,
} from "./styles"

const Loading = ({ full = false, style, className }: LoadingProps) => {
  const imageUrl =
    "https://imagensemoldes.com.br/wp-content/uploads/2021/04/Transparent-Rick-and-MortyPNG.png"

  return (
    <LoadingStyled
      $full={full}
      style={style}
      className={className}
      aria-label="Carregando"
    >
      <ContainerStyled>
        <CircularIconStyled />
        <LogoStyled>
          <img src={imageUrl} alt="Logo" />
        </LogoStyled>
      </ContainerStyled>
    </LoadingStyled>
  )
}

export default Loading
