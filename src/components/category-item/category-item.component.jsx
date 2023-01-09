import "./category-item.styles.scss"

const CategoryItem = ({category}) => {
  console.log("CategoryItem")
  //Destructuring category
  const {imgUrl, title} = category
  return (
    <div className="category-container">
    {/* This is where I would add an image at the background. IF I HAD ONE */}
      <div className="background-image" style={{backgroundImage: `url(${imgUrl})`}}/>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Solmi</p>
      </div>
    </div>
  )
}

export default CategoryItem