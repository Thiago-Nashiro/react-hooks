import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart:[],
    products:[],
    user:null,
    number: 0,
}
 //x7 /25 parseInt , add n qualquer

function reducer(state, action){
    switch(action.type) {
        case 'number_add2':
            return{ ...state, number: state.number + 2} 
        case 'login':
            return{...state, user:{name: action.payload}}
        case 'multi':
            return {...state, number: state.number*7}
        case 'dividir':
            return{...state, number:state.number / 25 }
        case 'Parse':
                return{...state, number: parseInt(state.number) }
            case 'addNumero':
                return{...state, number: state.number + action.payload }
            
            default:
                return state
                
    }

}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (


        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">
                {state.user.name}</span>
                 : <span className="text">Sem Usúario</span>
                }
               
                
                <span className="text">{state.number}
                <div>
                <button className="btn"
                    onClick = {( ) => dispatch({type: 'login', payload: 'Maria' } )}
                    >Login</button>
                    <button className="btn"
                    onClick = {( ) => dispatch({type: 'number_add2'} )}
                    >+2</button>
                     <button className="btn"
                    onClick = {( ) => dispatch({type: 'multi'} )}
                    >x7</button>
                      <button className="btn"
                    onClick = {( ) => dispatch({type: 'dividir'} )}
                    >/25</button>
                     <button className="btn"
                    onClick = {( ) => dispatch({type: 'Parse'} )}
                    >Inteiro</button>


                    <button className="btn"
                    onClick = {( ) => dispatch({type: 'addNumero', payload:-9 } )}
                    >-9</button>

                    <button className="btn"
                    onClick = {( ) => dispatch({type: 'addNumero', payload:+11 } )}
                    >+11</button>
                  
                </div>

                </span>
            </div>
        </div>
    )
}

export default UseReducer
