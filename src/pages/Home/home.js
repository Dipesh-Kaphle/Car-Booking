import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Home from "../../components/Home"
import * as reducerToolsAction from "../../actions/reducerToolsAction"
import * as home from "../../services/home"

const MainPage = (props) => {
  const {
    actions: {
      reducerCleanRequest,
      myBookCar,
      compareByIdList,
      fetchProductList,
      suggestCar,
      addwishList,
      mywishList,
    },
  } = props

  const CompareByIdList = (formData, callback) => {
    compareByIdList(formData, callback)
  }
  const AddWishLists = (id, callback) => {
    addwishList(id, callback)
  }
  const SuggestCarByPrice = (formData, callback) => {
    suggestCar(formData, callback)
  }

  useEffect(() => {
    fetchProductList()
    myBookCar()
    mywishList()
  }, [fetchProductList, myBookCar])

  useEffect(() => {
    return () => {
      reducerCleanRequest()
    }
  }, [reducerCleanRequest])

  return (
    <Home
      {...props}
      CompareByIdList={CompareByIdList}
      SuggestCarByPrice={SuggestCarByPrice}
      AddWishLists={AddWishLists}
    />
  )
}

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  allProductList: state.allProductList.payload,
  allProductLoading: state.allProductList.loading,
  bookCarList: state.bookCarList.payload,
  bokCarLoading: state.bookCarList.loading,
  fetchWishList: state.fetchWishList.payload,
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
