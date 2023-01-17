import { useNavigate } from "react-router-dom"
import {BackgroundImage, Body, DirectoryItemContainer} from"./directory-item.styles"

const DirectoryItem = ({category}) => {
   //Destructuring category
  const {imageUrl, title, route} = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
    {/* This is where I would add an image at the background. IF I HAD ONE */}
      <BackgroundImage imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Solmi</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem