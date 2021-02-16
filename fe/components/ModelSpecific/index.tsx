
import ModelBoard from './ModelBoard';
import StickyNav from './StickyNav';
import ConceptDesc from './ConceptDesc';
import Experience360 from './Experience360';
import Highlight from './Highlight';
import DistanceDrivenCalc from './DistanceDrivenCalc';
import MainSpec from './MainSpec';
import ModelSelect from './ModelSelect';
import CustomModel from './CustomModel';
import Gallery from './Gallery';
import NextPhase from './NextPhase';

const ModelSpecific = () => {
    return (
        <>
        <ModelBoard />
        <StickyNav />
        <ConceptDesc />
        <Experience360 />
        <Highlight />
        <DistanceDrivenCalc />
        <MainSpec />
        <ModelSelect />
        <CustomModel />
        <Gallery />
        <NextPhase />
        </>
    );
};

export default ModelSpecific;
