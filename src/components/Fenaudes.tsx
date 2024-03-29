import styled from "styled-components";
import LoadingSpin from "./LoadingSpin";
import { ITournament } from "../utils/interfaces";
import Papa from "papaparse";
import { useState, useEffect } from "react";

const URL_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIYvfm5ECcVUGDuVofJuxIVRZ8O6kK0vOvxlVFNtZwiKTLmz6I0OWsx0N6ta3oqntXcCWnMXCS4dD5/pub?output=csv";

function Fenaudes() {
  const [data, setData] = useState<ITournament[]>([]);

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

  const tournamentsSorted = data.sort((a: ITournament, b: ITournament) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return (
    <Container>
      <h2> FENAUDES </h2>
      {data.length === 0 && (
        <LoadingSpin strokeColor="rgb(15 91 190)" size={100} margin="50px 0" />
      )}
      <FenaudesContainer>
        {tournamentsSorted.map((tournament: ITournament, index: number) => (
          <Tournament key={index}>
            <Span>{tournament.result}° lugar</Span>
            <SpanName>{tournament.name}</SpanName>
            <Span>{dateTransform(tournament.date)}</Span>
            <Link href={tournament.url} target="_blank" rel="noreferrer">
              chess results
            </Link>
          </Tournament>
        ))}
      </FenaudesContainer>
    </Container>
  );
}

function dateTransform(date: string) {
  const dateArray = date.split("/");
  return `${dateArray[0]}`;
}

export default Fenaudes;

const Span = styled.span`
  margin: 0 5px;
  padding: 0 5px;
`;

const SpanName = styled.span`
  font-weight: bold;
  width: 40%;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Tournament = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(2, 132, 199);
  color: white;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 15px 0;
`;

const FenaudesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 700px;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
