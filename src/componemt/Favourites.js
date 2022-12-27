import React, { useEffect, useState } from "react";
import { Col, Row, Input, Button, Image } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Favourites() {
  const [like, setLike] = useState(false);

  const likeImg = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };
  const keyLocal = Object.keys(localStorage);

  return (
    <>
      <Row gutter={[16, 24]}>
        {keyLocal.map((url, value) => {
          return (
            <>
              <Col className="gutter-row hover" span={6}>
                <Image
                  width={300}
                  height={300}
                  src={localStorage.getItem(url)}
                  preview={false}
                  className="img-hover"
                />
                <div>
                  <HeartFilled
                    className={
                      like === true
                        ? "icon-hover heart favourites"
                        : "icon-hover heart"
                    }
                    onClick={() => {
                      localStorage.removeItem(url);
                    }}
                  />
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default Favourites;
