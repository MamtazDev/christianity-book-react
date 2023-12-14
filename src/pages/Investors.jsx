import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import img1 from "../assets/ai/IMG_3104.jpeg";
import img2 from "../assets/ai/IMG_3105.jpeg";
export default function Investors() {
  return (
    <>
      <div className="container">
        <PageHeading />
        <h1 className="text-center mb-4">AI Therapist</h1>
        <div className="mb-5">
          <div className="d-flex gap-3 mb-4">
            <img className="img-fluid w-50" src={img1} alt="" />
            <img className="img-fluid w-50" src={img2} alt="" />
          </div>

          <p>
            <p>
              The Netflix of Mental Health AI Therapist “AI and Me” Technology
              Web Application
            </p>{" "}
            <br />
            <p>
              Imagine an AI that could lovingly and compassionately teach child
              abusers to stop and never abuse children again. I can do that.
              I’ve done it my whole career. I can teach an AI to do it. That is
              a billion dollar idea.
            </p>{" "}
            <br />
            <p>
              Imagine an AI that can lovingly and compassionately teach a
              battered woman in an abusive situation how to safely leave the
              situation. I can teach that to an AI. The AI takes the time to
              study every aspect of the situation and calculate the situation.
            </p>{" "}
            <br />
            <p>
              Imagine an AI that can lovingly discuss and evaluate the most
              loving and safe strategies for a gang member to leave his gang.
            </p>
            <br />
            <p>
              We need an AI therapist who can reach the unreachable people all
              over our world in every language simultaneously 24/7.
            </p> <br />
            <p>
              I accept full liability. All of my clients have agreed to
              participate. The AI will learn my model and listen to all our
              sessions. I will fully imprint my model.
            </p> <br />
            <p>
              I have a plan with ScienceSoft to create an AI therapist. I have
              been a professional therapist with clients including sex offenders
              since 2009 with a zero recidivism rate. I want to create an AI
              that will counsel people 24/7 for a small monthly fee. It will be
              the Netflix of mental health.
            </p>
            <p>
              Interested investors can email an inquiry to{" "}
              <a href="mailto:vinvestor@aiandme.us">investor@aiandme.us</a>
            </p>
          </p>

          {/* <p>
        AI Therapist The Netflix of Mental Health AI Therapist “AI and Me” Technology Web Application Imagine an AI that could lovingly and compassionately teach child abusers to stop and never abuse children again. I can do that. I’ve done it my whole career. I can teach an AI to do it. That is a billion dollar idea. Imagine an AI that can lovingly and compassionately teach a battered woman in an abusive situation how to safely leave the situation. I can teach that to an AI. The AI takes the time to study every aspect of the situation and calculate the situation. 
            <br /> <br />
        Imagine an AI that can lovingly discuss and evaluate the most loving and safe strategies for a gang member to leave his gang. We need an AI therapist who can reach the unreachable people all over our world in every language simultaneously 24/7. I accept full liability. All of my clients have agreed to participate. The AI will learn my model and listen to all our sessions. I will fully imprint my model. I have a plan with ScienceSoft to create an AI therapist. I have been a professional therapist with clients including sex offenders since 2009 with a zero recidivism rate. I want to create an AI that will counsel people 24/7 for a small monthly fee. It will be the Netflix of mental health. Interested investors can email an inquiry to <a href="mailto:vinvestor@aiandme.us">investor@aiandme.us</a>

        </p> */}
        </div>
      </div>
    </>
  );
}
