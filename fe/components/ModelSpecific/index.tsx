import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import Gallery from './Gallery';
import NextPhase from './NextPhase';
import VideoOveraly from './VideoOveraly';
import CustomCar from './CustomCar';

const ModelSpecific = () => (
  <>
    <ModelBoard />
    <StickyNav />
    <div id="nav1" className="sticky-nav-section" style={{ height: '500px' }}>1</div>
    <div id="nav2" className="sticky-nav-section" style={{ height: '500px' }}>2</div>
    <div id="nav3" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav4" className="sticky-nav-section"><CustomCar /></div>
    <div id="nav5" className="sticky-nav-section"><Gallery /></div>
    <div id="nav6" className="sticky-nav-section"><NextPhase /></div>
  </>
);

export default ModelSpecific;
