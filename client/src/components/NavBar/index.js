const NavBar = ({ photoCategory, setPhotoCategory }) => {
  const catsColor = photoCategory !== "shark" ? "#944dff" : "#e7e7e7";
  const sharksColor = photoCategory !== "cat" ? "#944dff" : "#e7e7e7";
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
        style={{ ...buttonStyles, backgroundColor: sharksColor }}
        onClick={(event) => clickhandler(event)}
      >
        Sharks
      </button>
      <button
        style={{ ...buttonStyles, backgroundColor: catsColor }}
        onClick={(event) => clickhandler(event)}
      >
        Cats
      </button>
    </div>
  );
};

export default NavBar;
