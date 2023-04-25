import Nav from "@/components/Nav";
import Homes from "@/components/Homes";
import KidsAndFamily from "@/components/KidsAndFamily";
import HealthWellness from "@/components/HealthWellness";
import Events from "@/components/Events";
import Aminities from "@/components/Aminities";
import Samaritans from "@/components/Samaritans";
import WeOffer from "@/components/WeOffer";
import Banner from "@/components/Banner";
import Foot from "@/components/Foot";

export default function Home(){

  return(

    <main class>
      <Nav></Nav>
      <Homes></Homes>
      <KidsAndFamily></KidsAndFamily>
      <HealthWellness></HealthWellness>
      <Events></Events>
      <Aminities></Aminities>
      <Samaritans></Samaritans>
      <WeOffer></WeOffer>
      <Banner></Banner>
      <Foot></Foot>
    </main>
  );
}