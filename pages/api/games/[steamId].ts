// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // // const { steamId } = req.query;
  // // const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&format=json&include_appinfo=1`);

  // // // TODO

  // // const data = await response.json();

  // // // TODO

  // // const gameData = data.response.games.map(g => {
  // //   return {
  // //     id: g.appid,
  // //     name: g.name,
  // //     playtime: g.playtime_forever,
  // //   };
  // // });

  // // res.status(200).json(gameData);

  res.status(200).json([
    {
      id: 220,
      name: "Half-Life 2",
      playtime: 14
    },
    {
      id: 340,
      name: "Half-Life 2: Lost Coast",
      playtime: 0
    },
    {
      id: 320,
      name: "Half-Life 2: Deathmatch",
      playtime: 0
    },
    {
      id: 3320,
      name: "Insaniquarium! Deluxe",
      playtime: 116
    },
    {
      id: 2990,
      name: "FlatOut 2",
      playtime: 166
    },
    {
      id: 6220,
      name: "FlatOut",
      playtime: 0
    }]);
}
