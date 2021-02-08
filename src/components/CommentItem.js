import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const PostItem = ({comment}) => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{comment.email} | {comment.name}</Card.Title>
                        <Card.Text>
                            {comment.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default PostItem;