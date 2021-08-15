import { useUpdatePost } from "features";
import { FC } from "react";
import { Button, Form, Modal } from "react-bootstrap";

type PropsType = {};

export const UpdatePostModal: FC<PropsType> = (props: PropsType) => {
  const {
    errors,
    isSubmitting,
    submit,
    showPostModal,
    handleSubmit,
    register,
    reset,
    setSubmit,
    onUpdate,
    setShowPostModal,
  } = useUpdatePost();

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
        <Modal.Title>Making progress?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onUpdate)}>
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
              className={`my-2${
                errors.url?.message ? " is-invalid" : submit ? " is-valid" : ""
              }`}
              type="text"
              placeholder="Youtube Tutorial URL"
              {...register("url")}
              name="url"
            />
            <div className="invalid-feedback">{errors.url?.message}</div>
          </Form.Group>
          <Form.Group className={errors.status?.message ? "has-danger" : ""}>
            <Form.Control
              className={`form-select my-2${
                errors.status?.message
                  ? " is-invalid"
                  : submit
                  ? " is-valid"
                  : ""
              }`}
              as="select"
              {...register("status")}
              name="status"
            >
              <option value="TO LEARN">TO LEARN</option>
              <option value="LEARNING">LEARNING</option>
              <option value="LEARNED">LEARNED</option>
            </Form.Control>
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
