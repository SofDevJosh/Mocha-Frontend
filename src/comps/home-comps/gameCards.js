import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../../styles/home-styles/comp-styles/game-card-styles.css'

export default function GameCards({gameTitle, gameImage, gameDescribe,page}) {
  return (
    <Card style={{ width: '18rem' }} id="gameCardContainer">
      <Card.Img variant="top" src={gameImage} width="100" height="220" />
      <Card.Body>
        <Card.Title>{gameTitle}</Card.Title>
        <Card.Text>
          {gameDescribe}
        </Card.Text>
        <a href={page}>
          <Button  id="GameCardButton">
            <span id="GameCardButtonTop">
            PLAY
            </span>
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}