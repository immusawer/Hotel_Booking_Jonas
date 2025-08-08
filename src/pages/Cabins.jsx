import React, { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getApiCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getApiCabins().then((res) => console.log(res));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://gdeqrbntopllxdatrmlm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />
    </Row>
  );
}

export default Cabins;
