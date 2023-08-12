import json from "../../../data/music.json";
import { MusicYearBlock } from "../../elements/music-year-block/MusicYearBlock";

export function Music() {
  const albums: Array<{
    year: string;
    albums: {
      name: string;
      image: string;
    }[];
  }> = json.music_albums;
  return (
    <main>
      {albums.map((albumsOfYear) => {
        return (
          <MusicYearBlock
            year={albumsOfYear.year}
            albums={albumsOfYear.albums}
            key={albumsOfYear.year}
          />
        );
      })}
    </main>
  );
}
