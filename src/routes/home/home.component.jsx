import Directory from "../../components/directory/directory.component";

const Home = () => {

  const categories = [
    {
      id: 1,
      title: "No Reset Sprint",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 2,
      title: "Finesse trainer",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 3,
      title: "Leaderboards",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 4,
      title: "Options",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 5,
      title: "Payment",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 6,
      title: "Suggestions",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
    {
      id: 7,
      title: "COMING SOON",
      imgUrl: "https://i.kym-cdn.com/photos/images/newsfeed/001/018/866/e44.png"
    },
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default Home;
