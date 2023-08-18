import React from "react";

const BookMarkPoints = () => {
  const points = [
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
    <div className="row">
      {points.map((point, index) => (
        <div key={index} className="col-12 col-lg-4 p-1">
          <div className="bookmarkInner">
            <span className="mb-1">Point {index}</span>
            <article>
              <span className="mb-1">{point.title}</span>
              <p>{point.description}</p>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookMarkPoints;
