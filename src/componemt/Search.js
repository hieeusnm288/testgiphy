import React, { useState } from "react";
import { Col, Row, Input, Button, Image } from "antd";
import { getImageBySearch } from "../service/imageService";
import { HeartFilled } from "@ant-design/icons";
import "./search.scss";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};

function Search() {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [limit, setLimit] = useState(8);
  const [like, setLike] = useState(false);

  const likeImg = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  const loadMore = async () => {
    setLimit(limit + 8);
    let res = await getImageBySearch(search, limit);
    setGifs(
      res.data.map((gif) => {
        return gif.images.fixed_height;
      })
    );
  };

  const getGif = async () => {
    let res = await getImageBySearch(search, 8);
    setGifs(
      res.data.map((gif) => {
        return gif.images.fixed_height;
      })
    );
    setLimit(8);
  };

  return (
    <>
      <div className="d-flex mb-5 jus">
        <Input
          placeholder="Search Image"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="primary" onClick={getGif}>
          Search
        </Button>
      </div>
      <Row gutter={[16, 24]}>
        {gifs.map((gif, key) => {
          return (
            <>
              <Col className="gutter-row hover" span={6}>
                <Image
                  width={300}
                  height={300}
                  src={gif.url}
                  preview={false}
                  className="img-hover"
                />

                <HeartFilled
                  className={
                    like === true
                      ? "icon-hover heart favourites"
                      : "icon-hover heart"
                  }
                  onClick={() => {
                    localStorage.setItem(key, gif.url);
                  }}
                />
              </Col>
            </>
          );
        })}
      </Row>
      <Button type="primary" onClick={loadMore}>
        Load More
      </Button>
    </>
  );
}
// icon-hover heart favourites
export default Search;
