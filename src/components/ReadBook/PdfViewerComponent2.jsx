import React, { useContext, useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";
import { BASE_URL } from "../../config/confir";
import { AuthContext } from "../../contexts/AuthProvider";

import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);



  const [audioSrc, setAudioSrc] = useState("");

  const { user } = useContext(AuthContext);

  const AudioFetch = async (filename) => {
    setAudioSrc(`${BASE_URL}/api/audio?filename=${filename}`);
  };

  const [pageIndex, setPageIndex] = useState();

  useEffect(() => {
    // console.log('asd',props.audios.includes(`${pageIndex}`))
    if (props.audios.includes(`${pageIndex}`)) {
      AudioFetch(pageIndex);
    }
  }, [pageIndex]);

  useEffect(() => {
    AudioFetch(0);
  }, []);



  useEffect(() => {
    const container = containerRef.current;

    async function loadPSPDFKit() {
      try {
        // Ensure that there's only one PSPDFKit instance.
        if (instanceRef.current) {
          PSPDFKit.unload(container);
        }

        // Load PSPDFKit instance
        instanceRef.current = await PSPDFKit.load({
          container,
          document: props.document,
          baseUrl: `${window.location.protocol}//${window.location.host}/`,
        });
        instanceRef.current.setViewState((viewState) => {
          return viewState.set(
            "sidebarMode",
            PSPDFKit.SidebarMode.DOCUMENT_OUTLINE,
          );
        });

        const outline = PSPDFKit.Immutable.List([
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 0 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Part 1 One-Life Edition",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 3 }),
            children: PSPDFKit.Immutable.List([]),
            title: "PREFACE",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 10 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Table Of Content",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 14 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity instills paralyzing fear of the future",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 25 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity divides families",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 27 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity promotes hatred",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 30 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity glamorizes unrealistic “spiritual” expectations in marriage.",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 40 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity owes its existence",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 44 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity invented the Christian death spiral of mental distress due to its very disturbing approach immortality",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 47 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity requires that you empower schizophrenics and narcissists over your life and your family",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 58 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity demands",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 60 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity uses fear, punishment, and censorship to prevent freedom of thought",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 62 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity is dependent on maintaining a scientific view that is stagnant while interpretations of the Bible are quickly becoming more a reflection of our scientific evolution",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 65 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity provides no comfort in certain mental health cases and the Christian version of god makes the suffering immeasurably worse, even indefinitely postponing the healing process",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 71 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity cannot promote an authentic positive group consciousness",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 95 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity invented the specific concepts of hell and the devil, which are among their most effective tools for controlling people",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 103 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity makes people incapable of one of the greatest virtues essential to mental health: patience",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 105 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity alleges that it is the pre-eminent religion of “grace,” which is no compliment, but rather “grace” is Christianity’s one word mantra meaning you are no good",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 109 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity indoctrinates gender inequality as the essence of divine hierarchy",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 118 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity requires that you be Catholic or in rebellion to Catholics as your only options for faith",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 121 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              " Long-term exposure to Christianity results in a pervasive developmental delay called a “peacemaker.”",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 131 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity works hand in hand with government oppression and with zero accountability because of their symbiotic relationship, because Christianity has become just another big business, a corporatocracy, a money-making scam and scheme (i.e., kleptocracy)",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 141 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity depends on the claim that Christianity itself is necessary for morality to prevent societal collapse",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 161 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity intensifies gender dysphoria and cannot alleviate gender dysphoria within its theology including the phenomena associated with the diversity of gender attraction combinations",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 169 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity produces a never-ending stream of Satanists",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 193 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity teaches the virtue of self-sacrifice (i.e., “serving others”) as supreme",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 247 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Church lady syndrome: You’re so used to being “selfless” that going in the direction of self-love and/or self-care feels selfish.",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 259 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity simultaneously promotes intense study and enforces the rejection of rational thought",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 268 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "The first two commandments allegedly delivered by Jesus do not work in therapy and cannot heal humans. Furthermore, they present the Christian god as an insecure narcissist",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 270 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity promotes toxic judgmental behavior as a virtue",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 272 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "There is currently underway a mass exodus from Christianity in America",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 275 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity destroys the innocence of children and thereby manufactures an endless stream of broken, highly vulnerable, immature adults",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 278 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity forces Christians to bend every world event to fit into some allegedly coherent, non-existent Biblical last days timeline.",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 280 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity has a long history of actively preventing and thwarting the administration of justice in criminal cases and, particularly, in cases of child sex abuse",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 292 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "The dynamics of Christianity’s relationship to Christians mirrors the characteristics of a case of severe physical and sexual child abuse",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 297 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              " Never ever forget that the Christian “god of Love,” the god that is Love, never found it in his wisdom or judgement to define “love” in his most important book",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 305 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity promotes the psychology of desperate, needy powerlessness",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 308 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity claims that Jesus taught people how to pray in a way that must be impossible and Christian prayer is generally a toxic psychological state that poisons your mind",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 326 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity promotes poverty through the system of tithes and offerings",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 331 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity wants all your time and talents, everything with which you have been blessed and everything with which you will be blessed for the building up of the kingdom of God on earth",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 334 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity distorts your experience of any perceived “reward” or “blessing”",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 340 }),
            children: PSPDFKit.Immutable.List([]),
            title: "Christianity is founded on SHAME and GUILT",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 347 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity has transformed Jesus into the supreme sadomasochist who glorifies himself by punishing himself for what you do",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 355 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity purports to be the religion of forgiveness and their Bible",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 392 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity is not really for broken people, but only for people who can readily and easily conform and “look” like “successful” Christian converts",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 396 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity creates an obsession with always feeling like you need to be prepared to defend yourself from judgment in a spiritual court",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 398 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity conditions you to reject the spiritual gifts of non-Christians and to automatically label them as works of the devil",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 402 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity has no loving explanation for the diversity of races and nationalities",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 404 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity trains you to “confess” your sins to Christian church “authorities”",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 411 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "The Bible depiction of the pre-eminent example of marriage is an unenlightened, ignorant, toxic, and neglectful recipe for failure and emotional trauma",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 424 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "The Bible romanticizes the violence of human sacrifice as godliness",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 429 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "The god of the Bible commanded the slaughter of innocent children just like the Egyptian Pharoah who slaughtered the Israelite children",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 437 }),
            children: PSPDFKit.Immutable.List([]),
            title:
              "Christianity worship of the Bible rigidity prevents development of a compelling, robust, and creative science of spirituality",
          }),
          new PSPDFKit.OutlineElement({
            action: new PSPDFKit.Actions.GoToAction({ pageIndex: 452 }),
            children: PSPDFKit.Immutable.List([]),
            title: "The End",
          }),
        ]);

        instanceRef.current.setDocumentOutline(outline);

        instanceRef.current.addEventListener(
          "viewState.change",
          (viewState) => {
            setPageIndex(viewState.toJS().currentPageIndex);
            console.log(viewState.toJS().currentPageIndex);
          },
        );
      } catch (error) {
        console.error("Error loading PSPDFKit:", error);
      }
    }

    loadPSPDFKit();

    // Cleanup
    return () => {
      if (instanceRef.current) {
        PSPDFKit.unload(container);
        instanceRef.current = null;
      }
    };
  }, [props.document]);

  // This div element will render the document to the DOM.
  return (
    <>
      <AudioPlayer src={audioSrc} />
      <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
    </>
  );
}
