import { useCreatePost } from "features";
import { FC } from "react";
import { Modal, Form, Button } from "react-bootstrap";

type PropTypes = {
  id?: string;
};

export const AddPostModal: FC<PropTypes> = (props: PropTypes) => {
  const {
    errors,
    isSubmitting,
    submit,
    showPostModal,
    handleSubmit,
    register,
    reset,
    setSubmit,
    onCreate,
    setShowPostModal,
  } = useCreatePost();

  return (
    <Modal
      show={showPostModal}
      onHide={() => {
        reset();
        setSubmit(false);
        setShowPostModal(false);
      }}
    >
      <Modal.Header>
        <Modal.Title>What do you want to learn?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onCreate)}>
        <Modal.Body>
          <Form.Group className={errors.title?.message ? "has-danger" : ""}>
            <Form.Control
              className={`my-2${
                errors.title?.message
                  ? " is-invalid"
                  : submit
                  ? " is-valid"
                  : ""
              }`}
              type="text"
              placeholder="Title"
              {...register("title")}
              name="title"
              aria-describedby="title-help"
            />
            <div className="invalid-feedback">{errors.title?.message}</div>
          </Form.Group>
          <Form.Group
            className={errors.description?.message ? "has-danger" : ""}
          >
            <Form.Control
              className={`my-2${
                errors.description?.message
                  ? " is-invalid"
                  : submit
                  ? " is-valid"
                  : ""
              }`}
              as="textarea"
              rows={3}
              placeholder="Description"
              {...register("description")}
              name="description"
            />
            <div className="invalid-feedback">
              {errors.description?.message}
            </div>
          </Form.Group>
          <Form.Group className={errors.url?.message ? "has-danger" : ""}>
            <Form.Control
              type="text"
              className={`my-2${
                errors.url?.message ? " is-invalid" : submit ? " is-valid" : ""
              }`}
              placeholder="Youtube Tutorial URL"
              {...register("url")}
              name="url"
            />
            <div className="invalid-feedback">{errors.url?.message}</div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              reset();
              setSubmit(false);
              setShowPostModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setSubmit(true)}
            disabled={isSubmitting}
          >
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
