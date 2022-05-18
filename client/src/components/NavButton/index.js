const NavButton = ({
  direction,
  index,
  photoNum,
  setIndex,
}) => {
  const cycleNav = true;
  let disabled = false;
  if (!cycleNav) {
    disabled =
      (index === 0 && direction === "left") ||
      (index === photoNum - 1 && direction === "right");
  }

  const navClickhandler = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + photoNum) % photoNum;
    setTimeout(() => {
      setIndex(newIndex);
    }, 250);
  };

  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => navClickhandler(direction)}
      >
        {direction === "left" ? (
          "<-"
        ) : (
          "->"
        )}
      </button>
    </div>
  );
};

export default NavButton;
