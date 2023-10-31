import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function productItems(props) {
    return (
        <div className="col-md-4">
            <Card style={{ width: '100%', height: '450px' }}>
                <Card.Img variant="top" src={props.image} className=' img-fluid ' style={{  height: '300px' }} />
                <Card.Body className='pt-5'>
                    <Card.Title >{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>

    );
}

export default productItems;