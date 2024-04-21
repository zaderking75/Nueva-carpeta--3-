

function Tags (props)  {

    return (
      <>
        <div className="fondo2">
        <div className="card">
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">{props.textButton}</button>
      </div>
    </div>
        </div>
      </>
    )
  }
  
  export default Tags