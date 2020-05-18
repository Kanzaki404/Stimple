import React from 'react';
import {Button, Icon, Modal} from 'semantic-ui-react';


export default function Courses () {
    const detailBtn =  <Button className="infoBtn"><Icon icon name="info"/>Detail</Button>
    const modal =
    <Modal trigger={detailBtn} centered={false}>
    <Modal.Header>Assignment # Details:</Modal.Header>
    <Modal.Content>
       <p className="assign-detail">
       Lorem Ipsum is simply dummy text of the printing and
       typesetting industry. Lorem Ipsum has been the
       industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker
        including versions of Lorem Ipsum.
        </p>

        <p className="links"> Links:
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer">PDF Link</a>
            </div>
        </p>
    </Modal.Content>
  </Modal>
  
    return (
        <div className ="courses-cards">

            <div className="upper-items">
                <h2>Assignment Name</h2>
            </div>
            <div className="lower-items">
                <p>Deadline 24/12/2020</p>
                <div className="button-group">

                <Button className="editBtn"><Icon name="edit"/>Edit</Button>
                {modal}
                </div>
            </div>
        </div>

    )

}