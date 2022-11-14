// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Book } from "../../typing";

type Data = {
  name: Book;
};
type ErrorData = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | ErrorData>
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
  }
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  res.status(200).json(data.books);
}
