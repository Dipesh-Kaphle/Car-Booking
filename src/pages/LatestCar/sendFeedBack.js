import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import List from "../../components/FeedBack"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const SendFeedBack = (props) => {
  const {
    actions: { reducerCleanRequest,feedback },
  } = props
 const sendFeedBackormData=(formData,callback)=>{
  feedback(formData,callback)
 }
  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return <List {...props} sendFeedBackormData={sendFeedBackormData}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SendFeedBack)
