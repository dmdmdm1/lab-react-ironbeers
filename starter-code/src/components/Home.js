import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText } from "reactstrap"

export default function Home() {
  return (
    <div>
      <div>
        <Card>
          <Link to="/allbeers">
            <CardImg src="/images/beers.png" alt="Beer"></CardImg>
          </Link>
          <h1>All Beers</h1>
          <CardText style={{ textAlign: "center !important" }}>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
        </Card>
      </div >
      <div>
        <Card>
          <Link to="/randombeer">
            <CardImg src="/images/random-beer.png" alt="Beer"></CardImg>
          </Link>
          <h1>Random Beer</h1>
          <CardText>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
        </Card>
      </div>
      <div>
        <Card>
          <Link to="/newbeer">
            <CardImg src="/images/new-beer.png" alt="Beer"></CardImg>
          </Link>
          <h1>New Beer</h1>
          <CardText>Qui enim ea et non eiusmod consequat cillum commodo. Sint culpa laborum sunt officia aliqua enim dolore ipsum aliqua dolore magna adipisicing dolor. Reprehenderit quis duis voluptate ad consectetur labore ipsum esse et laborum aliqua. Incididunt non exercitation cillum sunt est dolor consectetur culpa excepteur ut reprehenderit culpa commodo. Eiusmod elit qui sit excepteur ut dolore exercitation sit aliqua aliqua culpa.</CardText>
        </Card>
      </div>
    </div>
  )
}
