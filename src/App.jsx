import { useState } from "react";
import "./App.css";
import Card from "./Card";
import img1 from "./data/One-piece 1.png";
import img2 from "./data/boruto-naruto-next-generations 1.png";
import img3 from "./data/spy_card 1.png";
import img4 from "./data/attackontitan 1.png";
import img5 from "./data/captsu_card 1.png";
import img6 from "./data/aoashi_card 1.png";
import imgCarou from "./data/spy_carousel 1.png";
import carousel0 from "./data/onepiece_carousel.jpg";
import carousel1 from "./data/boruto_carousel.jpg";
import carousel2 from "./data/spy_carousel 1.png";
import carousel3 from "./data/attack_on_titan_carousel.jpg";
import carousel4 from "./data/tsubasa_carousel.jpg";
import carousel5 from "./data/aoashi_carousel.png";
function App() {
  const data = [
    {
      id: 1,
      name: "One Piece",
      image: img1,
      imageCarousel: carousel0,
      episode: "Episode 1108",
      description:
        "One Piece kể về cuộc hành trình của Monkey D. Luffy - thuyền trưởng của băng hải tặc Mũ Rơm và các đồng đội của cậu.",
    },
    {
      id: 2,
      name: "Boruto Naruto Next Generations",
      image: img2,
      imageCarousel: carousel1,
      episode: "Episode 250",
      description:
        "Trong nhiệm vụ tiếp theo của mình, Boruto làm vệ sĩ cho Tento, con trai của Lãnh chúa Hỏa quốc.",
    },
    {
      id: 3,
      name: "Spy X Family",
      image: img3,
      imageCarousel: carousel2,
      episode: "Episode 07",
      description:
        "Spy x Family là một bộ truyện tranh hài hước và cảm động xoay quanh một gia đình trong thời kỳ Chiến Tranh Lạnh",
    },
    {
      id: 4,
      name: "Shingeki no kyoujin",
      image: img4,
      imageCarousel: carousel3,
      episode: "Episode 28",
      description:
        " Đại chiến Titan, cũng được biết tới với tựa bản tiếng Anh Attack on Titan và tên gốc tiếng Nhật Shingeki",
    },
    {
      id: 5,
      name: "Captain Tsubasa",
      image: img5,
      imageCarousel: carousel4,
      episode: "Episode 28",
      description:
        " Đại chiến Titan, cũng được biết tới với tựa bản tiếng Anh Attack on Titan và tên gốc tiếng Nhật Shingeki",
    },
    {
      id: 6,
      name: "Aoashi",
      image: img6,
      imageCarousel: carousel5,
      episode: "Episode 28",
      description:
        " Đại chiến Titan, cũng được biết tới với tựa bản tiếng Anh Attack on Titan và tên gốc tiếng Nhật Shingeki",
    },
  ];
  const [showData, setShowData] = useState(data);
  const dataCarousel = {
    id: 0,
    name: "Weather With You",
    description:
      "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.",
    imageCarousel: imgCarou,
  };
  const [showCarousel, setShowCarousel] = useState(dataCarousel);
  const handleClick = (e) => {
    setShowCarousel(e);
  };
  return (
    <>
      <div className="homePage">
        <div className="menuBar">
          <div className="logo">Anonime</div>
          <a href="">Home</a>
          <a href="">List anime</a>
          <input type="text" placeholder="Search anime or movie" />
        </div>
        <p className="explore">Explore</p>
        <p className="what">What are you gonna watch today?</p>
        <div className="boxCarousel">
          <div className="gradientBox"></div>
          <img src={showCarousel.imageCarousel} alt="" />
          <div className="boxbox">
            <p className="weather">{showCarousel.name}</p>
            <p className="descriptionCrousel">{showCarousel.description}</p>
          </div>
        </div>
        <p className="newRelease">New Release</p>

        <div className="showVideo">
          {showData.map((item) => (
            <Card
              name={item.name}
              image={item.image}
              description={item.description}
              episode={item.episode}
              key={item.id}
              handleClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
