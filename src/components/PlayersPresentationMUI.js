import { Col, Container, Card,Row, CardTitle, Icon} from "react-materialize";
import { Link } from "react-router-dom/dist";


export default function PlayersPresentationMUI({players}) {


    return(
        <div>

            <Container>
                <Row>
                    {players.map((player) => (
                        <Col
                        m={4}
                        s={4}>
                        <Card 
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={player.img}
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
                         revealIcon={<Icon>more_vert</Icon>}
                         title={player.name}></CardTitle>}>
                       
                        <p className="title">{player.club}</p>
                        <Link to={`detail/${player.id}`}>
                            

                            <p><button className="btn btn-dark btn-lg btn-block">
                            Detail</button></p>
                        </Link>


                        </Card>
                        </Col>

                    )

                    )}

                </Row>
            </Container>
        </div>
    )
}