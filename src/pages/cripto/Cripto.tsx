
import confetti from "canvas-confetti"
import Button from "../../components/button"
import WineContent from "../../components/themesContent/WineContent"
import Title from "../../components/title/Title"
import "./cripto.css"

const rotate = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350]

function Cripto() {

    const handleConffeti=()=>
    {
        confetti();
    }

    return <WineContent color="var(--blue)">
        <Title textTitle="Feliz dia de flores 🐮 🐸 " textSize="20" textColor="var(--white)"></Title>
        {
            <div className="flor">
                {
                    rotate.map((elemento: number, indx: number) =>
                        <div className="petalo" key={`petalonro${indx}`} style={{ transform: `rotate(${elemento}deg)` }}>

                        </div>
                    )}
                {<div className="centro">

                </div>

                }
                {
                    <div className="base">

                    </div>
                }

            </div>
        }
        <div style={{height:"100px"}}>

        </div>
        <Button
            textButton="siuu"
            onClick={handleConffeti}
            
        >

        </Button>
    </WineContent>
}
export default Cripto