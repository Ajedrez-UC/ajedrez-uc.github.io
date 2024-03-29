import styled from "styled-components";

function FAQ() {
  return (
    <Container>
      <SubContainer>
        <h2>Preguntas Frecuentes</h2>
        <Question>
          <Title>
            ¿Puedo tomar el ramo de la selección si no estoy en ella?
          </Title>
          <p>
            <Bold>No</Bold>, la toma del ramo es <Bold>exclusiva</Bold> para los
            seleccionados.
          </p>
        </Question>
        <Question>
          <Title>
            ¿Qué debería tomar si soy nuevo en el mundo del ajedrez?
          </Title>
          <p>
            Te recomendamos que tomes <Bold>Ajedrez I</Bold>. Este ramo es para
            principiantes, y te enseñará las bases del ajedrez.
          </p>
        </Question>
        <Question>
          <Title>¿Puedo ir de oyente a las clases?</Title>
          <p>
            Por el momento, este semestre (2023-1) no se puede ir de oyente ni a
            las clases de Ajedrez I ni a la selección. Sin embargo, hay un
            <Bold> espacio disponible todos los viernes de 13:00 a 14:50 </Bold>
            para que puedas ir a jugar ajedrez con seleccionados y gente
            interesada en el ajedrez.
          </p>
        </Question>
        <Question>
          <Title>¿Cómo puedo unirme a la selección?</Title>
          <p>
            Normalmente hay 3 formas de unirte a la selección:
            <ol>
              <li>Dar y aprobar Ajedrez I, luego hablar con el profesor.</li>
              <li>
                Si ya tienes bastante experiencia en ajedrez, puedes hacer un
                test de nivel estipulado por el profesor que será anunciado en
                instagram.
              </li>
              <li>
                Ser nivel muy alto en ajedrez (alto Elo fide), y hablar
                directamente con el profesor.
              </li>
            </ol>
          </p>
        </Question>
        <Question>
          <Title>¿De cuánto es el nivel promedio en la selección?</Title>
          <p>
            El rango de nivel es muy amplio, pero <Bold>la mayoría</Bold> de los
            seleccionados está entre los 1700 y 2200 Elo Lichess.
          </p>
        </Question>
      </SubContainer>
    </Container>
  );
}

export default FAQ;

const Bold = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e2e8f0;
  padding: 30px 0;
  padding-bottom: 50px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 20px;
`;

const Title = styled.h3`
  margin: 10px 0;
`;

const Question = styled.div`
  text-align: justify;
  background-color: #f8fafc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
`;
