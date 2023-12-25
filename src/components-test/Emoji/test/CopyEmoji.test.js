import "@testing-library/jest-dom"
import {fireEvent,render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../../App"

describe("Kopyalama Testleri" , () =>{
    let copyText;
    beforeEach(() =>{
        render(<App/>)
        copyText = screen.getByText("100")
    })
    test("Emojiler tıklandığında kopyalanıyor mu ?" , () =>{
        fireEvent.click(copyText)
        expect(copyText.parentElement.getAttribute("data-clipboard-text")).toMatch("💯")
    })
})