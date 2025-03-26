
import confetti from "canvas-confetti"
import Button from "../button"
import WineContent from "../themesContent/WineContent"
import Title from "../title/Title"
import './flower.css'

const rotate = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350]

function Flower() {

    const handleConffeti=()=>
    {
        confetti();
    }

    return <WineContent color="var(--blue)">
        <Title textTitle="Feliz dia de flores Luuu 🐮🐸 " textSize="20" textColor="var(--white)"></Title>
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
        <img 
            src="../../public/images/bob_esponja.png" 
            alt="Bob esponja" 
            height={"150px"}
            style={{zIndex:"4"}}
        />
        <Button
            textButton="siuu"
            onClick={handleConffeti}
            
        >

        </Button>
    </WineContent>
}
export default Flower