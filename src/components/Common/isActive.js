import React, {useEffect, useState} from 'react'
import {Checkbox} from "./AntdComponents";

const IsActive = (props) => {

  const [isChecked, setIsChecked] = useState(props.checked)

  useEffect(() => {
    setIsChecked(props.checked)
  }, [props.checked])

  return (
    <Checkbox
      name={props.name}
      label={props.label ? props.name : "Is Active"}
      allowClear
      form={props.form}
      initialValue={isChecked ? isChecked : false}
      required={!props.notRequired}
    >
      Active
    </Checkbox>
  )
}

export default IsActive