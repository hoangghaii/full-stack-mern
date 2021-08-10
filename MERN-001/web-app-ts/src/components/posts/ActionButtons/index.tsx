import IconEdit from "assets/pencil.svg";
import IconPlay from "assets/play-btn.svg";
import IconDelete from "assets/trash.svg";
import { FC } from "react";
import { Button } from "react-bootstrap";

type PropTypes = {
  url: string;
  _id: string;
};

export const ActionButtons: FC<PropTypes> = (props: PropTypes) => {
  const choosePost = (id: string) => {};
  const deletePost = (id: string) => {};

  return (
    <>
      <Button className="post-button" href={props.url} target="_blank">
        <img src={IconPlay} alt="play" width="32" height="32" />
      </Button>
      <Button className="post-button" onClick={() => choosePost(props._id)}>
        <img src={IconEdit} alt="edit" width="24" height="24" />
      </Button>
      <Button className="post-button" onClick={() => deletePost(props._id)}>
        <img src={IconDelete} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};
