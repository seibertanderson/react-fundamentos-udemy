export default function (props) {
    var numeroRandomico = parseInt(Math.random() * (props.max - props.min) + props.min);
    return (
        <div>
            <h2>Gerar número Randomico</h2>
            <p>Número Randomico entre {props.min} e {props.max} é {numeroRandomico}</p>
        </div>
    )
}