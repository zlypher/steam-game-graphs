interface ISteamGraphsProps {
    games: any[];
};

export const SteamGraphs = ({ games }: ISteamGraphsProps) => {
    return <div>
        <h2>Steam Graphs</h2>
        <ul>
            {games.map((g) => <li key={g.id}>{g.name} ({g.playtime} min)</li>)}
        </ul>
    </div>;
}