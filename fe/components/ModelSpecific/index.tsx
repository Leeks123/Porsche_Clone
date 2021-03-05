import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import Gallery from './Gallery';
import NextPhase from './NextPhase';
import VideoOveraly from './VideoOveraly';
import Concept from './Concept';
import CustomCar from './CustomCar';

type Props = {
  model: string,
  page: object, spec: object,
}
const ModelSpecific = ({ model, page, spec }:Props) => {
  console.log('modelspecific props', page, spec);
  return (
    <>
      <ModelBoard data={spec} />
      <StickyNav navList={page.navlist} />
      <div id="nav1" className="sticky-nav-section">{page.concept && <Concept />}</div>
      <div id="nav2" className="sticky-nav-section"><VideoOveraly data={page.videooverlay[0]} /></div>
      <div id="nav3" className="sticky-nav-section"><VideoOveraly data={page.videooverlay[1]} /></div>
      <div id="nav4" className="sticky-nav-section"><VideoOveraly data={page.videooverlay[2]} /></div>
      <div id="nav5" className="sticky-nav-section"><CustomCar data={spec} /></div>
      <div id="nav6" className="sticky-nav-section"><Gallery data={page.gallery} model={model} /></div>
      <div id="nav7" className="sticky-nav-section"><NextPhase /></div>
    </>
  );
};

export default ModelSpecific;
