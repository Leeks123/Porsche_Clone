import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import Gallery from './Gallery';
import NextPhase from './NextPhase';
import VideoOveraly from './VideoOveraly';

const ModelSpecific = () => (
  <>
    <ModelBoard />
    <StickyNav />
    <div id="nav1" className="sticky-nav-section" style={{ height: '500px' }}>dsjfkdsjfkdsjfk</div>
    <div id="nav2" className="sticky-nav-section" style={{ height: '500px' }}>dssfdsfdsfds</div>
    <div id="nav3" className="sticky-nav-section" style={{ height: '500px' }}>dsjfkdsfsdfdsjfkdsjfk</div>
    <VideoOveraly />
    <Gallery />
    <NextPhase />
  </>
);

export default ModelSpecific;
