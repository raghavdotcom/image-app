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
    <div
      className="App"
      style={{
        margin: "5px 5px",
        padding: "10px 10px",
        backgroundColor: "#f0e6ff",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <NavBar
        photoCategory={photoCategory}
        setPhotoCategory={setPhotoCategory}
      />
      {isLoading ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div className="buttonContainer" style={{ alignSelf: "center" }}>
            <NavButton
              direction="left"
              index={index}
              setIndex={setIndex}
              photoNum={photoList.length}
            />
          </div>
          <div>
            <img
              style={{
                width: "400px",
                height: "300px",
                padding: "10px",
                border: "1px solid #ddccff",
                borderRadius: "10px",
              }}
              src={photoList[index % photoList.length]}
            />
          </div>
          <div className="buttonContainer" style={{ alignSelf: "center" }}>
            <NavButton
              direction="right"
              index={index}
              setIndex={setIndex}
              photoNum={photoList.length}
            />
          </div>
          <div style={{ gridColumn: 2 }}>
            {(index % photoList.length) + 1}/{photoList.length}
          </div>
        </div>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
}

export default App;
