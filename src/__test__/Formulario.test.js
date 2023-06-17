import { fireEvent,getByText ,render,screen } from "@testing-library/react"
import Formulario from "../components/Formulario"

describe("Testeamos el Formulario",()=>{
    test("validar imput",()=>{

    })
    test("revisar submit",()=>{
        render(<Formulario/>);
        const getSubmit = screen.getByRole("button")
        fireEvent.click(screen.getByText(/Enviar/i))
        expect()
    })
})