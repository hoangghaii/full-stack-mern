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
      className="shadow h-100"
      style={{ borderRadius: ".5rem", padding: ".5rem 1rem" }}
      border={
        status === "LEARNED"
          ? "success"
          : status === "LEARNING"
          ? "warning"
          : "danger"
      }
    >
      <Card.Body className="py-2 px-3">
        <Card.Title>
          <Row className="flex-column">
            <Col className="p-0 d-flex flex-column">
              <h3 className="d-inline-block text-truncate m-100 post-title">
                {title}
              </h3>
              <Badge
                className="mb-3 text-left"
                style={{ width: "fit-content" }}
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
            <Col className="text-right p-0 d-flex justify-content-start">
              <ActionButtons url={url} _id={_id} />
            </Col>
          </Row>
        </Card.Title>
        <Card.Text style={{ marginLeft: "-12px" }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
