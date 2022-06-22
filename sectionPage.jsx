import Header from './Header/Header';
import ImageSlider from './Slider/Slider';
import Exam from './Exam/Exam';
import Feature from './Feature/Feature';
import VerticalNav from './NavBar/verticaltabbar';

const SectionPage=()=> {
  return (
    <div>
      <Header></Header>
      <ImageSlider></ImageSlider>
      <VerticalNav></VerticalNav>
      <Exam></Exam>
      <Feature></Feature>
    </div>
  );
}
export default SectionPage; 