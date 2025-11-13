import Affichage from "./Affichage";
import Button from "./Button";

const Membre = ({nom, children, age, handleChange, hideName, handleClick, plus}) => {
    // const nom = props.nom
    // const children = props.children
    // const {nom, children} = props
    return (
        <>
            <Affichage
                nom={nom}
                age={age}
            />
            <input type="text" value={nom} onChange={handleChange}/>
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null }
            <Button
                plus={plus}
                vieillir={handleClick}
            />
        </>
    );
}

export default Membre;