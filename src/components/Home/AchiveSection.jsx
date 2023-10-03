import React from "react";
import mentalStability from "../../assets/images/mental_stability.png";
import experience from "../../assets/images/experience.png";
import motivation from "../../assets/images/motivation.png";
import AchiveCard from "./AchiveCard";

const AchiveSection = () => {
  const datas = [
    {
      id: 1,
      title: "Mental Stability",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: mentalStability,
    },
    {
      id: 2,
      title: "Experience",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: experience,
    },
    {
      id: 3,
      title: "Motivation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: motivation,
    },
  ];
  return (
    <section className="achive mb_all">
      <div className="container">
        <div className="mb_20">
          <h2 className="">
            What you’ll <span className="txt_curve">achieve</span> by
          </h2>
          <h2>this Book?</h2>
        </div>
        <p className="mb_30 sub_header">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <div className="row p-0 ">
            {datas.map((item) => (
              <AchiveCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchiveSection;
