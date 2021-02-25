import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import Gallery from './Gallery';
import NextPhase from './NextPhase';
import VideoOveraly from './VideoOveraly';
import Concept from './Concept';
import CustomCar from './CustomCar';

const nav718 = ['718 소개', '디자인', '360° 익스테리어', '퍼포먼스', '편의사양', '718GTS', 'Boxters 25 Years', '나만의 포르쉐 만들기', '갤러리', '다음단계'];
const ModelSpecific = () => (
  <>
    <ModelBoard />
    <StickyNav navList={nav718} />
    <div id="nav1" className="sticky-nav-section"><Concept /></div>
    <div id="nav2" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav3" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav4" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav5" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav6" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav7" className="sticky-nav-section"><VideoOveraly /></div>
    <div id="nav8" className="sticky-nav-section"><CustomCar /></div>
    <div id="nav9" className="sticky-nav-section"><Gallery /></div>
    <div id="nav10" className="sticky-nav-section"><NextPhase /></div>
  </>
);

export default ModelSpecific;
