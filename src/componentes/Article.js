import Button from "./Button"

function Article() {
    return (
        <div className="Article">
            <h3>ARTICULO</h3>
        <p>2.1. Crea un componente llamado Article con un contenido de un título (h3) y contenido lorem
ipsum en una etiqueta párrafo, que será utilizado únicamente desde el Componente Main varias
veces.

2.2. Crea un componente llamado botón con un contenido de un botón y será llamado desde el
componente Article. 
        </p>
        <Button/>
        </div>
        );
    }
        export default Article;