import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import List from "../../components/Faq"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const FaqItem = (props) => {
  const {
    actions: { reducerCleanRequest,fetchFaq },
  } = props
 useEffect(()=>{
     fetchFaq()
 },[fetchFaq])
  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return <List {...props}/>
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
    faqlist:state.Faqlist.payload
})

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

export default connect(mapStateToProps, mapDispatchToProps)(FaqItem)
