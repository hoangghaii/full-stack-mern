import IconEdit from "assets/pencil.svg";
import IconPlay from "assets/play-btn.svg";
import IconDelete from "assets/trash.svg";
import { useDeletePost, useUpdatePost } from "features";
import { FC } from "react";
import { Button } from "react-bootstrap";

type PropsType = {
  url: string;
  _id: string;
};

export const ActionButtons: FC<PropsType> = (props: PropsType) => {
  const onDelete = useDeletePost();
  const { setIdPostUpdate, setShowPostModal } = useUpdatePost();

  return (
    <>
      <Button className="post-button" href={props.url} target="_blank">
        <img src={IconPlay} alt="play" width="32" height="32" />
      </Button>
      <Button
        className="post-button"
        onClick={() => {
          setShowPostModal(true);
          setIdPostUpdate(props._id);
        }}
      >
        <img src={IconEdit} alt="edit" width="24" height="24" />
      </Button>
      <Button className="post-button" onClick={() => onDelete(props._id)}>
        <img src={IconDelete} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};
