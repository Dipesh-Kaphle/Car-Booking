import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import List from "../../components/CompareCar"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const Compare = (props) => {
  const {
    actions: { reducerCleanRequest,suggestCar },
  } = props
  const SuggestCarByPrice=(formData,callback)=>{
    suggestCar(formData,callback)
  }
  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return <List {...props} SuggestCarByPrice={SuggestCarByPrice}/>
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({})

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, reducerToolsAction, home),
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare)
