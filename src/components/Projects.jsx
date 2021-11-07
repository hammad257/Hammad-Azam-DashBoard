import React,{useState} from "react";
import styled from "styled-components";
import AvatarImage from "../assets/avatarImage2.jpg";
import AvatarImage2 from "../assets/avatarImage3.jpg";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import { Chart } from 'primereact/chart';


function Projects() {

  const[totalChats,setTotalChats]=useState([])
  const[totaldays,setTotaldays]=useState([])

  const stackedData = {
    labels:totaldays, 
    datasets: [{
        type: 'bar',
        label: 'Chats',
        backgroundColor: '#42A5F5',
        data:totalChats
    }]
};

const getLightTheme = () => {      
  let stackedOptions = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      responsive: true,
      scales: {
          xAxes: [{
              stacked: false,
              ticks: {
                  fontColor: '#495057'
              },
              gridLines: {
                  color: '#ebedef'
              }
          }],
          yAxes: [{
              stacked: false,
              ticks: {
                  fontColor: '#495057'
              },
              gridLines: {
                  color: '#ebedef'
              }
          }]
      },
      legend: {
          labels: {
              fontColor: '#495057'
          }
      }
  };

  return {
      stackedOptions
  }
}



const {stackedOptions } = getLightTheme();
  
  return (
    <YourProjects>
      <Project>
      
        <Detail>
        <Chart type="line" data={stackedData} options={stackedOptions} />
        </Detail>
      </Project>
    
      <AllProjects>See all projects</AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;
