import Button from 'react-bootstrap/Button';

function Mycard (props) {

    return (
      <>
    <div className="card">
      <img className="card-image" src={props.image}  />
      <div className="card-body">
        <h2>{props.name}</h2>
        <hr />
        <h5>{props.title}</h5>
        <h6>{props.description}</h6>
        <hr />
        <Button>{props.textButton}</Button>
      </div>
    </div>
      </>
    )
  }
  
  export default Mycard