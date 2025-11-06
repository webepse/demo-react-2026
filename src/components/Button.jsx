const Button = (props) => {
    return ( 
        <button onClick={props.vieillir}>
            +{props.plus}
        </button>
     );
}
 
export default Button;