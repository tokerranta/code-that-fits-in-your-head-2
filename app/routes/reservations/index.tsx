import type { ActionArgs} from "@remix-run/node";
import { json } from "@remix-run/node"

export const action = async ({ request }: ActionArgs) => {
    return json({ reservation: {} });
}