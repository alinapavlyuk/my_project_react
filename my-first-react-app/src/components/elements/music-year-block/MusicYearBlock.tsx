import "./musicYearBlock.scss";

type MusicYearBlockProps = {
  year: string;
  albums: {
    name: string;
    image: string;
  }[];
};

export function MusicYearBlock({ year, albums }: MusicYearBlockProps) {
  return (
    <div className="music-year-block">
      <h2 className="albums-year">{year}</h2>
      <div className="albums-rows">
        {albums.map((album) => {
          return (
            <div className="album-cover-container" key={album.name}>
              <img
                src={"./images/album_covers/" + album.image}
                alt={album.name}
                className="album-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
