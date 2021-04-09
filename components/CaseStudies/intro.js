import React from "react";
import Container from "@material-ui/core/Container"
import CardBody from 'components/Card/cardbody.js'
import Card from 'components/Card/card.js'


export default function Intro() {
    return(
      <Card className="affirmative intro">
       <CardBody className="hiddenContainerGrid">
         <h3>Affirmative.</h3>
         <span>
           <p>Affirmative is a positive thinking app for IOS that emulates a deck of affirmations. In other words, it’s
             a collection of positive statements presented in a playing card format that the user can then read,
             collect, and share. More importantly, Affirmative houses a growing library of resources committed to
             assisting those strugglings with a wide variety of mental health issues. </p>
         </span>

         <span>
           <p><em>My role:</em> User research, user flows, information architecture, sketching, wireframing, brand
             development, UI design, prototyping, usability testing.</p>
         </span>
       
       
       <p>If you want to cut to the chase, click the button below to open up the Figma prototype in a new tab.</p>
       <button className="figmaButton" id="figma"><a target="_blank" rel="noopener noreferrer"
           href="https://www.figma.com/proto/xcE96toHlmSD2rypfzD9ss/Affirmative-Final?node-id=131%3A1876&viewport=381%2C429%2C0.06556179374456406&scaling=scale-down">
           Go to Figma Prototype</a></button>
       <p>...or continue scrolling to read the case study.</p>
       </CardBody>

      <CardBody className="hiddenContainerGrid">
         <h3>The Challenge</h3>
       <p>
         A handful of applications exist that give users ways to practice posititve self-talk (affirmations), but there
         are few that give their users the option to reach out for further assistance when their self-help app doesn’t
         immediately solve all of their problems. The primary challenge was to design a system that strikes a balance
         between promoting the benefits of positive thinking and acknowledging the pitfalls of relying upon it for
         serious issues, while also providing options to remedy those pitfalls.</p>

       <h3>The Goal</h3>
       <p>Design an iOS app in the mental wellness genre that breaks the mold of self-help cliches.</p>
       <p>Create a game-like experience that attracts a wide user pool, but doesn’t alienate more serious
         users. </p>
       <p>Maintain a continuously growing library that provides specified mental wellness resources,
         accounting for people from a wide swath of races, gender identities, sexual orientations, religious
         affiliations, and age groups. </p>
       </CardBody>

       <CardBody className="hiddenContainerGrid">
         <h4>Evolution of the design</h4>
       <p>Discover: Competitive research, user surveys, interviews, personas</p>
       <p>Definition:
         User stories, minimum viable functionality, information architecture, content creation, user flows</p>
       <p>Ideation:
         Sketches, wireframing, initial testing, intro to brand development</p>
       <p>Prototyping + Testing:
         Test functionality, comprehension and communication of content, usability</p>
       <p>Solidification: Another primer of preference and usability testing, then revise, rinse, repeat</p>
       </CardBody>

     </Card>
    );
}