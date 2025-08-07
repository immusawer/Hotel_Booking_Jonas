import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1"> Hotel Booking</Heading>
        <Row type="vertical">
          <Heading as="h1"> Hotel Booking</Heading>
          <Heading as="h2"> Hotel Booking</Heading>
          <Heading as="h3"> Hotel Booking</Heading>
          <Heading as="h4"> Hotel Booking</Heading>
          <Heading as="h5"> Hotel Booking</Heading>
          <Heading as="h6"> Hotel Booking</Heading>
        </Row>
        <Row type="horizontal">
          <Button
            size="small"
            variation="primary"
            onClick={() => alert("Check-In")}
          >
            Check-In
          </Button>
          <Button
            size="large"
            variation="danger"
            onClick={() => alert("Check-Out")}
          >
            Check-Out
          </Button>
          <Input type="number" placeholder="Enter Room Number"></Input>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
