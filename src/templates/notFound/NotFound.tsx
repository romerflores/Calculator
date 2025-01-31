
import Title from "../../components/title/Title"
import "./notFound.css"

function nutFud()
{
    console.warn("error 404 Nut Fund Bru!!")
}

function NotFound() {

    nutFud()
    return (
        <section className="page_404">
            <Title 
                textTitle="404" 
                textColor="black" 
                textSize="50"
            />

            <Title textTitle="Pagina No encontrada" textColor="black" textSize="30"/>
        </section>
    )


}
export default NotFound