

import { createStore } from 'redux';



    // const initialState = {
    //     header:{
    //         background: '#272727'
    //     },
    //     container:{
    //         background: '#343435'
    //     },
    //     buttons:{
    //         color: 'white',
    //         background: '#313030'
    //     },
    //     outputs:{
    //         color: 'white',
    //         background: '#272727'
    //     },
    //     icons:{
    //         background: '#434344'
    //     },
    //     iconValues:{
    //         color: 'white',
    //     }
    //   }

    //   const headerBackground = initialState.header.background;
    //   const containerBackground = initialState.container.background;
    //   const buttonsColor = initialState.buttons.color;
    //   const buttonsBackground = initialState.buttons.background;
    //   const outputsColor = initialState.outputs.color;
    //   const outputsBackground = initialState.outputs.background;
    //   const iconsBackground = initialState.icons.background;
    //   const iconsValuesColor = initialState.iconValues.color;

  
    const reducer = (state = {
        headerBackground:'', 
        containerBackground:'', 
        buttonsColor:'', 
        buttonsBackground:'', 
        outputsColor:'', 
        outputsBackground:'', 
        iconsBackground:'', 
        iconsValuesColor:''}, 
        action) => {
        switch (action.type) {
          case 'DARK_MODE':
            return {
                headerBackground: '#272727',
                containerBackground : '#343435',
                buttonsColor: 'white',
                buttonsBackground : '#313030',
                outputsColor: 'white',
                outputsBackground : '#272727',
                iconsBackground : '#434344',
                iconsValuesColor: 'white'
            };
          case 'LIGHT_MODE':
            return {
                headerBackground : 'white',
                containerBackground : '#f8f8f9',
                buttonsColor : 'black',
                buttonsBackground : '#f2f2f2',
                outputsColor : 'black',
                outputsBackground : 'white',
                iconsBackground : '#f7f7f9',
                iconsValuesColor : 'black',
            };    
          default:
            return state;
        };
      }
    
    export const store = createStore(reducer)
    
    store.subscribe(() => {
        console.log(store.getState())
    })

    export const mapStateToProps = state => {
        return {
          headerBackground: state.headerBackground,
          containerBackground: state.containerBackground,
          buttonsColor: state.buttonsColor,
          buttonsBackground: state.buttonsBackground,
          outputsColor: state.outputsColor,
          outputsBackground: state.outputsBackground,
          iconsBackground: state.iconsBackground,
          iconsValuesColor: state.iconsValuesColor
        };
      };

    export const mapDispatchToProps= dispatch => {
          return{
            dark_mode: () => dispatch({type: 'DARK_MODE'}),
            light_mode: () => dispatch({type: 'LIGHT_MODE'}),
          }
      }



// function Theme(){
//   return(
//       <div className="calculator__icons">
//           <span className="light_mode calculator__icons--value material-icons-outlined">
//               light_mode
//           </span>
//           <span className="dark_mode calculator__icons--value material-icons-outlined">
//               dark_mode
//           </span>
//       </div>
//   )
// }




// export default Theme;

