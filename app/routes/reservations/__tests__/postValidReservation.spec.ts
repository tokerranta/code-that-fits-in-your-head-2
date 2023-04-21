import { describe, expect, test } from "@jest/globals";
import { action } from "~/routes/reservations/index";

describe('Post valid reservation', () => {
    const newReservation = {
        when: "",
        email: "",
        name: "",
        quantity: 0
    };
    const request = new Request("http://new-reservation.com", { method: "POST", body: JSON.stringify(newReservation)});
    test("Returns status code of 200", async () => {
        const response = await action({ request, context: {}, params: {}});
        expect(response.status).toBe(200);

    })
    
})