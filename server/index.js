import express from "express";
import cors from "cors";
import photos from "./database.js";

const app = express();
const port = 9000;
const photosRouter = express.Router();

const { catsList, sharksList } = photos;

const mixArray = (arr) => {
  let currIdx = arr.length;
  let temp;
  let randIdx;
  while (currIdx !== 0) {
    randIdx = Math.floor(Math.random() * currIdx);
    currIdx = currIdx - 1;
    temp = arr[currIdx];
    arr[currIdx] = arr[randIdx];
    arr[randIdx] = temp;
  }
  return arr;
};

photosRouter.get("/", (req, res) => {
  const { category } = req.query;
  let returnList = [];
  if (category == "cat") {
    returnList = catsList;
  } else if (category == "shark") {
    returnList = sharksList;
  } else {
    returnList = mixArray([...catsList, ...sharksList]);
  }
  res.json(returnList);
});

// Middleware
app.use(cors());

// photos endpoint
app.use("/photos", photosRouter);

// Error
app.use((req, res) => {
  const error = new Error("Not found");
  res.status(404).json({
    message: error.message,
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
