import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeLi from './PokeLi';

function PokeAttackCard(props) {

    return (
        <div class="card">
            <div class="card-header px-0 pb-2">
                <PokeLi name="Nom" value={props.nom} />
            </div>
            <ul class="list-group list-group-flush py-2">
                <PokeLi name="Niveau" value={props.niveau} />
                <PokeLi name="Puissance" value={props.puissance} />
                <PokeLi name="Précision" value={props.precision} />
                <PokeLi name="PP" value={props.pp} />
            </ul>
        </div>
    )
}

export default PokeAttackCard;
