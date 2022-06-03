import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import List from "../../components/CarValuation"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const CarValuation = (props) => {
  const {
    actions: { reducerCleanRequest, carValuation },
  } = props
  const carValuationByPram = (formData, callback) => {
    carValuation(formData, callback)
  }
  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return <List {...props} carValuationByPram={carValuationByPram} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CarValuation)
