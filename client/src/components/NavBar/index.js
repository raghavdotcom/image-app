const NavBar = ({ photoCategory, setPhotoCategory }) => {
  const catsColor = photoCategory !== "shark" ? "red" : "black";
  const sharksColor = photoCategory !== "cat" ? "red" : "black";
  const buttonStyles = {
    width: "70px",
    margin: "5px 5px",
  };

  const clickhandler = (event) => {
    if (event.currentTarget.innerText.toLowerCase() === "cats") {
      if (photoCategory === "shark") {
        setPhotoCategory("");
      } else if (photoCategory === "") {
        setPhotoCategory("shark");
      }
    }
    if (event.currentTarget.innerText.toLowerCase() === "sharks") {
      if (photoCategory === "cat") {
        setPhotoCategory("");
      } else if (photoCategory === "") {
        setPhotoCategory("cat");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{ ...buttonStyles, color: sharksColor }}
        onClick={(event) => clickhandler(event)}
      >
        Sharks
      </button>
      <button
        style={{ ...buttonStyles, color: catsColor }}
        onClick={(event) => clickhandler(event)}
      >
        Cats
      </button>
    </div>
  );
};

export default NavBar;
