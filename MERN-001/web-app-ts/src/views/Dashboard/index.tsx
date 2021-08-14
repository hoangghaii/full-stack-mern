import IconAdd from "assets/plus-circle-fill.svg";
import { AddPostModal } from "components/posts/AddPostModal";
import { SinglePost } from "components/posts/SinglePost";
import { UpdatePostModal } from "components/posts/UpdatePostModal";
import { PostType, useCheckAuth, useCreatePost, usePostsList } from "features";
import { FC } from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { RouteComponentProps } from "react-router";

type PropTypes = {};

export const Dashboard: FC<PropTypes & RouteComponentProps> = (
  props: PropTypes
) => {
  const { authInfo } = useCheckAuth();
  const { postsList } = usePostsList();
  const { setShowPostModal } = useCreatePost();

  let body;

  if (!authInfo || !postsList)
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (authInfo && postsList) {
    if (postsList.post && postsList.post.length === 0)
      body = (
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {authInfo.user}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to LearnIt</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
            </Card.Text>
            <Button variant="primary" onClick={() => setShowPostModal(true)}>
              LearnIt!
            </Button>
          </Card.Body>
        </Card>
      );
    else {
      const posts = postsList.post;
      body = (
        <>
          <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
            {posts.map((post: PostType) => (
              <Col key={post._id} className="my-2">
                <SinglePost post={post} />
              </Col>
            ))}
          </Row>

          {/* Open Add Post Modal */}
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip id={"1"}>Add a new thing to learn</Tooltip>}
          >
            <Button
              className="btn-floating"
              onClick={() => setShowPostModal(true)}
            >
              <img src={IconAdd} alt="add-post" width="60" height="60" />
            </Button>
          </OverlayTrigger>
        </>
      );
    }
  }
  return (
    <>
      {body}
      <AddPostModal />
      <UpdatePostModal />
      {/* {post !== null && <UpdatePostModal />} */}
    </>
  );
};
