// import legends from "../data/players.json";
import styled from "styled-components";
import LoadingSpin from "./LoadingSpin";
import { IPlayer } from "../utils/interfaces";
import Papa from "papaparse";
import { useState, useEffect } from "react";

const URL_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfScGlam1Qj7u58RnG_NO0JHoODUYb2k63ApgzkVsYemxCTl48zAY1yzCfhr4bfPRCq7yIzSDae24K/pub?gid=950300490&single=true&output=csv";

function Legends() {
  const [data, setData] = useState<IPlayer[]>([]);

  useEffect(() => {
    const fetchData = () => {
      Papa.parse(URL_CSV, {
        download: true,
        header: true,
        complete: (results: any) => {
          setData(results.data);
        },
      });
    };
    fetchData();
  }, []);

  const playersNameFix = data.map((player: IPlayer) => {
    player.name = player.name
      .split(" ")
      .map(
        (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
    return player;
  });

  const playersSorted = playersNameFix.sort((a: IPlayer, b: IPlayer) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <SubContainer>
        <h2>Jugadores Históricos</h2>
        Aquí se encuentran algunos jugadores que han pertenecido en algún
        momento en la selección.
        <Table>
          <thead>
            <TrHead>
              <th>Título</th>
              <th>Nombre</th>
              <th>FED</th>
              <th>FIDE ID</th>
            </TrHead>
          </thead>
          <tbody>
            {playersSorted.map((player: IPlayer, index: number) => (
              <Tr key={index}>
                <td>{player.title}</td>
                <td>{player.name}</td>
                <td>{player.fed}</td>
                {player.code === "0" ? (
                  <td>-</td>
                ) : (
                  <td>
                    <Link
                      href={`https://ratings.fide.com/profile/${player.code}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {player.code}
                    </Link>
                  </td>
                )}
              </Tr>
            ))}
          </tbody>
        </Table>
        {data.length === 0 && (
          <LoadingSpin
            strokeColor="rgb(15 91 190)"
            size={100}
            margin="50px 0"
          />
        )}
      </SubContainer>
    </Container>
  );
}

export default Legends;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

const Tr = styled.tr`
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  & td {
    padding: 10px;
  }
`;

const TrHead = styled.tr`
  & th {
    background-color: #1e40af;
    padding: 10px;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: white;
  margin: 20px 0;

  & tr:nth-child(odd) {
    background-color: rgb(44 110 195);
  }
  & tr:nth-child(even) {
    background-color: rgb(15, 91, 190);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  & h2 {
    margin-top: 0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  padding: 20px;
`;
