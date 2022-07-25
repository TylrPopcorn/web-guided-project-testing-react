import React from 'react';

import { render, screen } from "@testing-library/react"

import userEvent from "@testing-library/user-event"

import MissionForm from "./MissionForm"

//Arrange - set up of the component being tested.

//Act - Execute the behavior we are testing.
//    - Inclucdes getting the elements we want to interact with, AND execute those interactions

//Assert - Confirming the result/behavior is as expected
//--------------------------------\\

//Does the component render?
test("MissionForm renders as expected.", () => {
    render(<MissionForm />)
});

//Does the component render as expectd when is fetching data is true?
test("Does the component render as expectd when is fetching data is true", () => {
    //Arrange:
    render(<MissionForm isFetchingData={true} />);

    //Act:
    const displayText = screen.queryAllByText(/we are fetching data/i)
    /********/
    //queryAllBy will NOT cause test to break right away.
    //getByText will cause test to break right away.

    //Assert:
    expect(displayText).toBeInTheDocument();
    expect(displayText).not.toBeNull();
})

//Does the component render as expectd when is fetching data is false?
test("Does the component render as expectd when is fetching data is false", () => {
    //Arrange:
    render(<MissionForm isFetchingData={false} />);

    //Act:
    const getDataButton = screen.queryByRole("button");
    const displayText = screen.queryByText(/we are fetching data/i)
    //const getDataButton = screen.getByRole()

    //Assert:
    expect(getDataButton).toBeInTheDocument();
    expect(getDataButton).not.toBeNull();
    expect(displayText).toBeNull();

})
//Mocks - FAKE functions.

//does get data execute when user executes the beahvior (pressing button)
test("calls getData when button is clicked", () => {
    //Arrange:
    const mockGetData = jest.fn() //Creates a mock function

    render(<MissionForm isFetchingData={false} getData={mockGetData} />)

    //Act:
    const getDataButton = screen.getByRole("button");
    userEvent.click(getDataButton);
    //userEvent.click(getDataButton);

    console.log(mockGetData.mock)

    //Assert:
    expect(mockGetData.mock.calls.length).toBe(1)
    expect(mockGetData.mock.calls).toHaveLength(1);
    expect(mockGetData).toHaveBeenCalledTimes(1); //Define the number of times it has been called.

})

//Mocks - FAKE functions.


