import React, { useState, useEffect, useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { UserSetting } from "../../context/UserSettingProvider";


export default function BlogLike({ defaultLikes, onChange }) {
  const {userSetting}=useContext(UserSetting)
  const yourUserId=userSetting.author._id
  const [likes, setLikes] = useState(defaultLikes);
  const iLikedThisArticle = likes.includes(yourUserId);
  const toggleLike = () => {
    if (iLikedThisArticle) {
      setLikes(likes.filter((id) => id !== yourUserId));
    } else {
      setLikes([...likes, yourUserId]);
    }
    onChange && onChange(likes);
  };
  useEffect(() => {
    onChange && onChange(likes);
  }, [iLikedThisArticle]);
  return (
    <div>
      <Button
        onClick={toggleLike}
        variant={iLikedThisArticle ? "dark" : "dark-outline"}
      >
        <AiOutlineLike /> {`${likes.length}  like`}
      </Button>{" "}
    </div>
  );
}
