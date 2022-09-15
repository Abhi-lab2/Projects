import axios from "axios";
import { useEffect, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "./home.css";
import InputOption from "../inputOption";
import Nav from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import AnimeList from "./model";

export const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("code");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [model, setModel] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const client_id = "g_HE8n7UGVAyrbbEGbY57hdwAxPTLgXYLbox0XwZQ54";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  console.log("data:-", data);

  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };
  const handleClick = () => {
    setModel(true)

  }
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="App flex">
        <input
          type="text"
          onKeyDown={(e) => searchImages(e)}
          placeholder="Search For Images 🔎"
        />
        <InfiniteScroll
          dataLength={data.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<p>Load more...</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="main flex">
            {data.map((data, key) => (
              <div className="container" key={key}>
                <img
                  src={data.urls.small}
                  className="image"
                  alt={data.alt_description}
                />
                <h4>Photo by {data.user.name} 📸</h4>
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
    
                  {/* <InputOption
                    Icon={CommentIcon}
                    title="Comment"
                    color="gray"
                    onClick={setModalIsOpenToFalse}
                  /> */}
                  {/* <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button> */}

                    <InputOption Icon={CommentIcon}
                    title="Comment"
                    color="gray" isOpen={modalIsOpen}>
                        <button onClick={setModalIsOpenToFalse}>x</button>
                        <AnimeList/>
                    </InputOption>
                  <button onClick={() => handleClick}>X</button>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
