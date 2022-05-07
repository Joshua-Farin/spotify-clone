import React from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import { currentTrackIdState } from '../atoms/songAtom';
import useSpotify from './useSpotify'

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {
          if (currentIdTrack) {
            const trackInfo = await fetch(
              `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
              {
                headers: {
                  Authorization: `Bearer${spotifyApi.getAccessToken()}`,
                }
              }
            )
          }
        }
        fetchSongInfo();
    }, [currentIdTrack, spotifyApi]);

  return songInfo;
}

export default useSongInfo
