import { NextApiRequest, NextApiResponse } from "next";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
  api: {
    bodyParser: true,
  },
};

export default function (req: NextApiRequest, res: NextApiResponse) {
  const url = new URL(req.url);

  const text = url.searchParams.get("text") || "Hello Friend";

  return new ImageResponse(
    (
      <div tw=" w-full h-full text-base flex flex-col p-4 bg-gray-800 text-white">
        <div tw="flex flex-grow">
          <p tw="text-4xl font-bold">{text}</p>
        </div>
        <p tw="text-sm">Build with 💜 by Sarath</p>
      </div>
    ),
    {
      width: 600,
      height: 315,
    }
  );
}
