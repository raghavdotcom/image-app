import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NavButton from "./components/NavButton";

function App() {
  const [appData, setAppData] = useState({ photoList: {} });
  const [photoCategory, setPhotoCategory] = useState("cat");
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const { photoList } = appData;

  useEffect(() => {
    const loadPhotos = () => {
      let url = "http://localhost:9000/photos";
      if (["cat", "shark"].includes(photoCategory)) {
        url += `?category=${encodeURIComponent(photoCategory)}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setAppData({
              photoList: result,
            });
            setTimeout(() => {
              setIsLoading(true);
            }, 500);
          },
          (error) => {
            setIsLoading(true);
            setAppData({
              photoList: [],
            });
          }
        );
    };
    loadPhotos();
  }, [photoCategory]);

  return (
    <div className="App">
      <NavBar
        photoCategory={photoCategory}
        setPhotoCategory={setPhotoCategory}
      />
      {isLoading ? (
        <>
          <NavButton
            direction="left"
            index={index}
            setIndex={setIndex}
            photoNum={photoList.length}
          />
          <div>
            <img
              style={{ width: "400px", height: "300px" }}
              src={photoList[index]}
            />
          </div>
          <NavButton
            direction="right"
            index={index}
            setIndex={setIndex}
            photoNum={photoList.length}
          />
        </>
      ) : (
          <p> Loading... </p>
      )}
    </div>
  );
}

export default App;
