import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import Pagination from "../components/Utils/Pagination";
import Points from "../components/Utils/Points";

const Bookmark = () => {

  const options = [
    {
      title: "Getting Started",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "Getting Started",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "Getting Started",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      title: "The Language of Gossip Box",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <>
      <div className="container">
        <PageHeading>Bookmarks</PageHeading>
        <h2 className="mb_40">
          You can check your <span className="txt_curve">Bookmarks</span>
          <br className="d-none d-lg-block" /> here!
        </h2>
        <Points options={options} />
        <Pagination />
      </div>
    </>
  );
};

export default Bookmark;
