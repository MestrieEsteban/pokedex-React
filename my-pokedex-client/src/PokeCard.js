import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function PokeCard(props) {
    console.log(props);
    return (
        <a href={`/${props.ndex}`}>
            <div class={`${props.type} pokemon-pcard`}>
                <br/>  
                <img src={require(`./pokemons/${props.ndex}.png`)} alt={props.ndex} />
                <p class="text-left px-3 pb-3" key={props.ndex}>
                    <center>{props.nom}</center>
                    <br />
                    <strong>
                        <span>#{props.ndex}</span>
                    </strong>
                    <br />
                    {props.type}

                </p>
            </div>
        </a>

    )
}

export default PokeCard;
