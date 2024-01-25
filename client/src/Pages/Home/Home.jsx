import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { RandomPosters } from "../../Components/Posters/RandomPosters"
import bannerImg from '../../assets/Images/curtain.jpg'
import styles from './Home.module.scss'



export const Home = () => {
  return (
    <ContentWrapper title="">
      <img src={bannerImg} alt="banner" />
      <RandomPosters></RandomPosters>
    </ContentWrapper>
)
}
