import React,{useState} from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";
import { Calendar } from 'primereact/calendar';


function ProjectRecommendation() {

  const [date1, setDate1] = useState(null);
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
           
            <Info>
              <InfoName>Calender</InfoName>
              {/* <InfoUpdate>Updated 10m ago</InfoUpdate> */}
            </Info>
          </InfoContainer>
          <Badge content="Honda Accord Engine" />
        </Detail>
       
        <ProjectInfo>
 
        <Calendar placeholder="Please click me" id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
        </ProjectInfo>
        <PriceContainer>
          <Price>Engine Oil change</Price>
          <Badge content="Honda Accord" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;

    gap: 0.4rem;
  }
`;
const Price = styled.div``;

export default ProjectRecommendation;
