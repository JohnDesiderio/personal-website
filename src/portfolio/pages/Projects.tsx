import { Box } from '@mui/material';
import Header from '../components/header/header';
import SpotifyMixer from '../components/projects/examples/spotify-mixer';
import Recommender from '../components/projects/examples/recommender';
import GroupMeBot from '../components/projects/examples/groupme-bot';
import DiscreteEvent from '../components/projects/examples/event-simulator';
import Bookstore from '../components/projects/examples/bookstore';
import PeripheralSimulator from '../components/projects/examples/peripheral-simulator';
import ProgressiveWebApp from '../components/projects/examples/progressive-web-app';
import SocialMediaDemo from '../components/projects/examples/social-media-demo';

export const Projects: React.FC<{}> = () => {
  return (
    <Box display='flex' flexDirection='column' className='w-full bg-red-50'>
      <Header value={2} />
      <Box
        className='page-header'
      >
        Projects
      </Box>
      <SocialMediaDemo />
      <SpotifyMixer />
      <PeripheralSimulator />
      <GroupMeBot />
      <ProgressiveWebApp />
      <Recommender />
      <DiscreteEvent />
      <Bookstore />
    </Box>
  )
}

export default Projects;
