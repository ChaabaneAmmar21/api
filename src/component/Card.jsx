import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupWithHeaderExample({el}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>name:{el.name}</Card.Header>
      <ListGroup variant="flush" >
        <ListGroup.Item>id:{el.id}</ListGroup.Item>
       
        <ListGroup.Item>username:{el.username}</ListGroup.Item>
        <ListGroup.Item>name:{el.email}</ListGroup.Item>
        <ListGroup.Item><ul><h1>address:</h1>
          
          <li>street:{el.address.street}</li>
          <li>suite:{el.address.suite}</li>
          <li>city:{el.address.city}</li>
          <li>zipcode:{el.address.zipcode}</li></ul>
       <ul><h2>geo:</h2><li>lat:{el.address.geo.lat}</li>
        <li>ing:{el.address.geo.ing}</li>  </ul></ListGroup.Item>
        <ListGroup.Item>
          phone:{el.phone}

        </ListGroup.Item>
        <ListGroup.Item>
          phone:{el.website}
          
        </ListGroup.Item>
        <ListGroup.Item>
         <ul><h1>company:</h1>
          <li>name:{el.company.name}</li>
          <li>catchephrase:{el.company.catchPhrase}</li>
          <li>bs:{el.company.bs}</li>

         </ul>
          
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;