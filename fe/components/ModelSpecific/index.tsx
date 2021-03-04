import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import Gallery from './Gallery';
import NextPhase from './NextPhase';
import VideoOveraly from './VideoOveraly';
import Concept from './Concept';
import CustomCar from './CustomCar';

import pageData from './Data/page-data';
import specData from './Data/spec-data';

type Props = {
  model: string,
}
const ModelSpecific = ({ model }:Props) => {
  console.log('jdkj', model);
  console.log(specData[model]);
  return (
    <>
      <ModelBoard data={specData[model]} />
      <StickyNav navList={pageData[model].navlist} />
      <div id="nav1" className="sticky-nav-section">{pageData[model].concept && <Concept />}</div>
      <div id="nav2" className="sticky-nav-section"><VideoOveraly data={pageData[model].videooverlay[0]} /></div>
      <div id="nav3" className="sticky-nav-section"><VideoOveraly data={pageData[model].videooverlay[1]} /></div>
      <div id="nav4" className="sticky-nav-section"><VideoOveraly data={pageData[model].videooverlay[2]} /></div>
      <div id="nav5" className="sticky-nav-section"><CustomCar data={specData[model]} /></div>
      <div id="nav6" className="sticky-nav-section"><Gallery data={pageData[model].gallery} model={model} /></div>
      <div id="nav7" className="sticky-nav-section"><NextPhase /></div>
    </>
  );
};

export default ModelSpecific;
