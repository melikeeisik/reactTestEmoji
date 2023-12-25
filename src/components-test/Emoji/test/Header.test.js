import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
import Header from "../../../Header";

describe("Header Testleri", () =>{
    let emojiTitle;
    beforeEach(() =>{
        render(<Header/>)
        emojiTitle = screen.getByText("Emoji Search")
    })
    test("Başlık render edildi mi?", () =>{
        expect(emojiTitle).toBeInTheDocument();
    })
})