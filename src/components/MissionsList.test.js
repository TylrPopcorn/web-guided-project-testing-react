import React from 'react';

import { render, screen } from "@testing-library/react"
import MissionsList from "./MissionsList"

const missions = [
    { mission_name: "test", mission_id: "12vsegs" },
    { mission_name: "test2", mission_id: "bes43s2" },
]
///-----------------------------------\\\

test("renders without error", () => {
    render(<MissionsList missions={[]} />)
})

//re-rendering - allows us to test transitions in components when props change.

test("MissionsList shows data when re-rendered with new missions data", () => {
    //first stage: missions props is an empty array.
    const { rerender } = render(<MissionsList missions={[]} />)
    //rerender() - allows us to render the component every time there are new props.

    let missionDivs = screen.queryAllByTestId("mission");
    expect(missionDivs).toEqual([]);

    //second stage: missions props is an array with missions
    rerender(<MissionsList missions={missions} />)
    missionDivs = screen.queryAllByTestId('mission');
    expect(missionDivs).toHaveLength(2);
})
