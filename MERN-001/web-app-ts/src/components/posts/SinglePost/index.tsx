import { ActionButtons } from "components/posts/ActionButtons";
import { PostType } from "features";
import { FC } from "react";
import { Badge, Card, Col, Row } from "react-bootstrap";

type PropTypes = {
  post: PostType;
};

export const SinglePost: FC<PropTypes> = (props: PropTypes) => {
  const { _id, title, description, url, status } = props.post;

  return (
    <Card
      className="shadow"
      border={
        status === "LEARNED"
          ? "success"
          : status === "LEARNING"
          ? "warning"
          : "danger"
      }
    >
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <Badge
                pill
                variant={
                  status === "LEARNED"
                    ? "success"
                    : status === "LEARNING"
                    ? "warning"
                    : "danger"
                }
              >
                {status}
              </Badge>
            </Col>
            <Col className="text-right">
              <ActionButtons url={url} _id={_id} />
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
