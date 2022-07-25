import React from "react";

import { render, screen, waitFor } from "@testing-library/react"
//waitFor - supports async functionality. Waits for something to happen async before continuing.

import { userEvent } from "@testing-library/user-event"

import App from "./App"

import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";
jest.mock("./api/fetchMissions"); //This will create the physical mock.
//------------------------\\

//App renders without errors.
test("App renders without errors", () => {
    render(<App />)
})

test("App fetches and renders mission data", async () => {
    render(<App />)

    //Allow to fake a response of this mock used
    mockFetchMissions.mockResolvedValueOnce({
        data: [
            { mission_name: "test", mission_id: "12vsegs" },
            { mission_name: "test2", mission_id: "bes43s2" },
        ]
    })

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        expect(screen.getAllByTestId("mission")).toHaveLength(10);
    })
})