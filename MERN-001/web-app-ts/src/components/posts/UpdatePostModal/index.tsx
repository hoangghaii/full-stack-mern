import { updatePostModalState, useUpdatePost } from "features";
import { FC } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useSetRecoilState } from "recoil";

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
  } = useUpdatePost();
  const setShowPostModal = useSetRecoilState(updatePostModalState);

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
      <Form>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              {...register("title")}
              name="title"
              aria-describedby="title-help"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              {...register("description")}
              name="description"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Youtube Tutorial URL"
              {...register("url")}
              name="url"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              {...register("status")}
              name="status"
              className="form-select"
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
          <Button variant="primary" type="submit">
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
