import React from 'react';
import Container from './Container';
import pacmanImage from './pacman-image.jpg';

export const Pacman = () => {
  return (
    <Container>
      <h1>Pacman eating pizza</h1>
      <img src={pacmanImage} alt="Pacman eating pizza" />
    </Container>
  );
};