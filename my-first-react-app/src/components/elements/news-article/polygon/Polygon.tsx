import "./polygon.scss"

type Direction = "up" | "down";

type PolygonProps = {
    direction: Direction;
}

export function Polygon({direction}: PolygonProps) {
    return (
        <div className="polygon-container">
            <img src="./images/polygon_news.svg" className={"polygon " + (direction === "up" ? "" : "polygon-down")} alt="polygon"/>
        </div>
    )
}