import { Container } from "react-bootstrap"
import { Link, useRouteError } from "react-router-dom"

function Error() {

  let error: any = useRouteError();

  return (
    <Container className="notFound">
        <h1> { error.status } </h1>
        <p> { error.statusText } </p>
        <Link to="/" replace={true}>
            How about going back to safety? 
        </Link>
    </Container>
  )
}

export default Error
