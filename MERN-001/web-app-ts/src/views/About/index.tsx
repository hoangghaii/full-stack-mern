import { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router";

type PropTypes = {};

export const About: FC<PropTypes & RouteComponentProps> = (
  props: PropTypes
) => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://www.youtube.com/c/HenryWebDev"
          size="lg"
        >
          Visit my channel for more tutorials
        </Button>
      </Col>
    </Row>
  );
};
