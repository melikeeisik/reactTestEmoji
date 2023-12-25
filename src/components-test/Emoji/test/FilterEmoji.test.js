import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "../../../App"

describe("Filter Emoji Testleri", () =>{
    let  input
    beforeEach(() =>{
        render(<App/>)
        input =  screen.getByTestId("input")
    })
    test('Emoji filtreleniyor mu ?  ', () => {
        const text = "100"
        userEvent.type(input, text)
        expect(screen.getByText(text)).toBeInTheDocument
    })
    
})