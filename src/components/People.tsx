import styled from "styled-components";
import divis from "../images/divis.png";
import daniel from "../images/daniel.png";
import dan from "../images/dan.png";
import bele from "../images/bele.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoadingSpin from "./LoadingSpin";

import { useEffect, useState } from "react";

// https://levelup.gitconnected.com/33a6fabfad16
const URL_SCRIPT_GET_IMAGES =
  "https://script.google.com/macros/s/AKfycbwuqXEkFLh_S5IHZ5EzedIP4sjQSS-UJvJvxrfB1b5juxFWMdjRKbN6CS-TYNA2rmB9LQ/exec";

interface IImage {
  folder_id: string;
  img_id: string;
  name: string;
}

function People() {
  const [images, setImages] = useState<IImage[]>([]);
  // {folder_id: "", img_id: "", name: "" }

  useEffect(() => {
    fetch(URL_SCRIPT_GET_IMAGES)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
      });
  }, []);

  return (
    <Container>
      <Person>
        <Title>David Martínez</Title>
        <Image src={divis} alt="Divis" />
        <span>
          David Martínez, entrenador de la selección de ajedrez UC. No es el
          Divis.
        </span>
      </Person>
      <Person>
        <Title>Daniel Sebastián</Title>
        <Image src={daniel} alt="Daniel" />
        <span>
          Daniel, capitán de la selección. Asegura que la defensa holandesa no
          existe, y sí, ya se vio Gambito de Dama.
        </span>
      </Person>
      <Person>
        <Title>Dan Villablanca</Title>
        <Image src={dan} alt="Dan" />
        <span>
          Dan, delegado. Dice que el ajedrez es una metáfora para comprender la
          vida. También que es un vicio, pero suele omitir esa parte.
        </span>
      </Person>
      <Person>
        <Title>Belén Cisterna</Title>
        <Image src={bele} alt="Bele" />
        <span>
          Bele, encargade de comunicaciones. Juega más bullet del que debería,
          pero ya no llora cuando pierde una partida.
        </span>
      </Person>
      {images.length === 0 && (
        <LoadingSpin strokeColor="rgb(15 91 190)" size={100} margin="50px 0 0 0"/>
      )}
      <CarouselContainer>
        <Carousel
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          {images.map((image, id) => (
            <ImageContainer key={id}>
              <img
                src={`https://drive.google.com/uc?export=view&id=${image.img_id}`}
                alt={image.name}
              />
            </ImageContainer>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

export default People;

const ImageContainer = styled.div`
  border-radius: 10px;
`;

const CarouselContainer = styled.div`
  margin: 10px;
  margin-top: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 150px;
  margin: 10px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Person = styled.div`
  display: flex;
  max-width: 290px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(15 91 190);
  color: #f8fafc;
  & span {
    text-align: justify;
  }
  padding: 30px 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  flex-wrap: wrap;
  padding: 20px 0;
  padding-bottom: 70px;
`;

// const Icon = styled.i`
//     width: 10px;
//     text-align: center;
//     margin-right: 10px;
//     margin-top: 1px;
// `;

// const Link = styled.a`
//     color: #0f172a;
//     text-decoration: none;
//     display: inline-flex;
//     align-items: center;
//     font-weight: bold;
//     &:hover {
//         filter: brightness(1.2);
//         text-decoration: underline;
//     }
// `;

const Title = styled.h3`
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;
