import React from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import { currentTrackIdState } from '../atoms/songAtom';
import useSpotify from './useSpotify'

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {

        }
    }, [currentIdTrack, spotifyApi]);

  return songInfo;
}

export default useSongInfo
