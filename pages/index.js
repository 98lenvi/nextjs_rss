let Parser = require('rss-parser');
import {
  Article,
  FlexRow,
  FlexColumn,
  Thumbnail,
  H2,
  Button,
  P,
  Span,
  PaginationWrapper,
  PageWrapper,
  H1,
  ControlSectionWrapper,
  MainInput,
  MainForm,
  MainSubmit,
  HistorySection,
  IconButton,
  AudioPlayerWrapper,
  Padding
} from '../components';
import AudioPlayer from 'react-h5-audio-player';

function Page({ feed }) {
  const {
    items
  } = feed
  const [audioSrc, setAudioSrc] = React.useState('');

  const Element = ({ item, index }) => {
    console.log(item)
    const guid = item.guid;
    const thumbnailSRC = item.itunes.image;
    const title = item.title;
    const isPlaying = audioSrc === item.enclosure.url;
    const audioLink = item.enclosure.url;
    // const shareLink = `${url.host}?rss=${link}&page=${page ? page : 0}&id=${item.guid}`
    // const shareAction = () => CopyToClipboard(shareLink);
    const description = item.content;
    return (
      <Article>
        <FlexRow>
          <Thumbnail src={thumbnailSRC} />
          <FlexColumn>
            <H2 id={guid}>{title}</H2>
            <FlexRow>
              <Button
                disabled={isPlaying}
                onClick={() => {
                  setAudioSrc(audioLink);               
              }}>
                {isPlaying ? 'PLAYING' : 'PLAY ▶'}
              </Button>
            </FlexRow>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <div style={{maxWidth: '650px',width: '85vw'}} dangerouslySetInnerHTML={{__html:description}}/>
          </FlexColumn>
        </FlexRow>
      </Article>
    )
  }
  
  return(
    <PageWrapper>
      <AudioPlayerWrapper>
        <AudioPlayer
          autoPlay
          src={audioSrc} 
        />
      </AudioPlayerWrapper>
      {items.map( (item,index) => <Element item={item} index={index}/>)}
    </PageWrapper>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {
  const { rss } = context.query
  let parser = new Parser();
  let feed = await parser.parseURL(rss);
  return { props: { feed } }
}

export default Page