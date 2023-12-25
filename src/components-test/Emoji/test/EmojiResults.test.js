import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
import App from "../../../App"
import emojiList from  "../../../emojiList.json"
describe("Emoji Results Tesleri", () =>{
    
    beforeEach(() =>{
        render(<App/>)    
    })
    test("Emojiler render edilmiş mi?", () =>{
        const emojies = emojiList.slice(0,20)
        emojies.map((item) =>{
            expect(screen.getByText(item.title)).toBeInTheDocument
        })
    })
})