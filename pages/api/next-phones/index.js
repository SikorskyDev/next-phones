import { next_phones } from "../../../data/next-phones/goods";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(next_phones);
    }
}
