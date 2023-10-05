import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import Pagination from "../components/Utils/Pagination";
import Points from "../components/Utils/Points";

const HighLights = () => {
  const options = [
    {
      title: "Getting Started",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "Getting Started",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "Getting Started",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description: "Lorem Ipsum is simply dummy text.",
    },
  ];
  return (
    <div>
      <div className="container">
        <PageHeading path="/highlights">Highlights</PageHeading>
        <h2 className="mb_40">
          You can check your <span className="txt_curve">HIGHLIGHTS</span>
          <br className="d-none d-lg-block" /> here!
        </h2>
        <Points options={options} />
        <Pagination />
      </div>
    </div>
  );
};

export default HighLights;
