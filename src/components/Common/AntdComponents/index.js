import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"

import {
  Input,
  Form,
  notification,
  Select,
  Skeleton,
  DatePicker,
  Spin,
  Tooltip,
  TimePicker,
  Cascader,
} from "antd"
import {
  SearchOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  DownOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ReadOutlined,
} from "@ant-design/icons"

import { isArray, isEmpty } from "../../../utils/commonUtils"

const { Option } = Select

export const FormItem = ({
  name,
  label,
  colon,
  children,
  formStyle,
  localRules,
  formItemProps,
  formItemLayout,
  hideLabel,
  overflowHidden,
  initialValue,
  shouldUpdate,
  required,
  viewDetails,
  textArea,
  valuePropName,
  hidden,
}) => {
  const localFormStyle = formStyle || {}
  const hiddenStyle = hidden ? { height: 0, width: 0, margin: 0 } : {}
  const localStyle = overflowHidden
    ? { overflowX: "hidden", overflowY: "hidden", ...localFormStyle }
    : { ...localFormStyle }
  return (
    <Form.Item
      name={name}
      label={
        hideLabel || hidden ? null : (
          <span
            style={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14px",
              color: "#777777",
              backgroundClip: "#F7F7FC",
            }}
          >
            {label}
            {required && (
              <span
                style={{
                  color: "red",
                  fontSize: "13px",
                  fontFamily: "Noto Sans",
                }}
              >
                *
              </span>
            )}
            {viewDetails && ":"}
          </span>
        )
      }
      valuePropName={valuePropName}
      validateFirst
      shouldUpdate={shouldUpdate}
      initialValue={
        initialValue ||
        typeof initialValue === "boolean" ||
        initialValue === "" ||
        initialValue === 0
          ? initialValue
          : null
      }
      style={{ ...localStyle, ...hiddenStyle }}
      {...formItemProps}
      rules={localRules}
      {...formItemLayout}
      colon={colon || false}
      className={viewDetails && !textArea ? "detail-view" : ""}
    >
      {children}
    </Form.Item>
  )
}

const AntInput = (props) => {
  const {
    type,
    style,
    rules,
    label,
    onBlur,
    search,
    onClick,
    loading,
    showCount,
    hidden,
    message,
    disabled,
    onSearch,
    onChange,
    required,
    className,
    fieldProps,
    allowClear,
    placeholder,
    suffix,
    readOnly,
    maxLength,
    keyboard,
    htmlType,
  } = props

  const handleWhiteSpaceValidation = (rules, value) => {
    if (value && typeof value !== "number") {
      if (value?.split("")?.[0] !== " ") {
        return Promise.resolve()
      } else {
        return Promise.reject(`${label} cannot start with space`)
      }
    } else {
      return Promise.resolve()
    }
  }

  const positiveNumberValidation = (rules, value) => {
    if (value) {
      if (!isNaN(Number(value) >= 0)) {
        return Promise.resolve()
      } else {
        return Promise.reject(`${label} should be positive`)
      }
    } else {
      return Promise.resolve()
    }
  }

  const emailPattern = {
    pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    message: "Please enter in example@email.com format",
  }
  const phonePattern = {
    pattern: new RegExp(/^[0-9\b]+$/),
    message: "Please enter numbers only",
  }
  const whiteSpacePattern = {
    validator: handleWhiteSpaceValidation,
  }

  const positive = {
    validator: positiveNumberValidation,
  }

  const pattern =
    type === "email" || type === "contact"
      ? [emailPattern]
      : type === "phone"
      ? [phonePattern, positive]
      : [whiteSpacePattern]

  const tempRule = [
    {
      required: required,
      message: message || (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <div>Please enter</div>
          <div style={{ textTransform: "lowercase" }}>{label}</div>
        </div>
      ),
    },
    ...pattern,
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  const searchProps = search
    ? {
        suffix: !loading ? (
          <SearchOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
        ) : (
          <LoadingOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
        ),
        onPressEnter: onSearch,
      }
    : {}

  return (
    <FormItem {...props} localRules={localRules}>
      {!props.viewDetails || props.isField ? (
        <Input
          type={props.inputType}
          min={props.inputType && !props.allInteger ? 0 : undefined}
          hidden={hidden || false}
          onBlur={onBlur}
          autoFocus={false}
          onClick={onClick}
          disabled={disabled}
          onChange={onChange}
          readOnly={readOnly}
          className={className}
          keyboard={keyboard}
          htmlType={htmlType}
          maxLength={maxLength}
          showCount={showCount}
          allowClear={allowClear}
          placeholder={placeholder || `${label}`}
          style={{
            color: disabled && !props.viewDetails ? "#777777" : "inherit",
            border: props.viewDetails ? "none" : "",
            background: props.viewDetails ? "white" : "#F7F7FC",
            fontWeight: props.viewDetails ? "bold" : "normal",
            textAlign: props.viewDetails ? "center" : "",
            height: "40px",
            width: "100%",
            fontFamily: "Lora",
            fontStyle: "normal",
            fontSize: "14px",
            borderRadius: "100px",
            ...style,
          }}
          suffix={
            suffix === "search" ? (
              <Tooltip title="Search">
                <SearchOutlined
                  style={{ color: "rgb(0, 164, 73", fontSize: "19px" }}
                />
              </Tooltip>
            ) : suffix === "address" ? (
              <DownOutlined />
            ) : suffix === "changePassword" ? (
              <EyeOutlined />
            ) : suffix === "passwordChange" ? (
              <EyeInvisibleOutlined />
            ) : suffix === "location" ? (
              <ReadOutlined />
            ) : null
          }
          {...searchProps}
          {...fieldProps}
        />
      ) : (
        <div
          style={{
            textAlign: "center",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          <b>{props.initialValue || "-"}</b>
        </div>
      )}
    </FormItem>
  )
}

const AntSelect = (props) => {
  const {
    mode,
    style,
    array,
    suffixIcon,
    value,
    rules,
    label,
    onBlur,
    onSelect,
    onClick,
    message,
    disabled,
    onChange,
    required,
    fieldProps,
    noClear,
    placeholder,
    description,
    fieldNames,
    name,
    id,
  } = props

  const tempRule = [
    {
      required: required,
      message: message || (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <div>Please select</div>
          <div style={{ textTransform: "lowercase" }}>{label}</div>
        </div>
      ),
    },
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  return (
    <FormItem {...props} localRules={localRules}>
      {!props.viewDetails ||
      props.isField ||
      props.initialValue instanceof Array ? (
        <Select
          mode={mode}
          // showSearch={!props.noSearch}
          onBlur={onBlur}
          autoFocus={false}
          name={name}
          suffixIcon={suffixIcon}
          onClick={onClick}
          disabled={disabled || props.viewDetails}
          onChange={onChange}
          fieldNames={fieldNames}
          onSelect={onSelect}
          optionFilterProp="children"
          className={props.className}
          allowClear={!noClear}
          notFoundContent={props.waitFor ? <Spin size="small" /> : null}
          dropdownRender={props.dropdownRender}
          placeholder={placeholder || `${label}`}
          style={{
            ...style,
          }}
          {...fieldProps}
        >
          {!isEmpty(array)
            ? isArray(array) &&
              array.map((item, index) => {
                return (
                  <Option key={index} value={item[value]} id={item[id]}>
                    {item[description]}
                  </Option>
                )
              })
            : props.children}
        </Select>
      ) : (
        <div
          style={{
            textAlign: "center",
            // wordWrap: "break-word",
            // wordBreak: "break-word",
            width: props.findjob ? "230px" : "100%",
            backgroundColor: "white",
          }}
        >
          <b>
            {array.find((item, index) => item[value] === props.initialValue)?.[
              description
            ] || "-"}
          </b>
        </div>
      )}
    </FormItem>
  )
}
export const AndtCasCade = (props) => {
  const {
    array,
    value,
    rules,
    label,
    message,
    required,
    placeholder,
    description,
  } = props
  const tempRule = [
    {
      required: required,
      message: message || (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <div>Please select</div>
          <div style={{ textTransform: "lowercase" }}>{label}</div>
        </div>
      ),
    },
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  return (
    <FormItem {...props} localRules={localRules}>
      {!props.viewDetails ||
      props.isField ||
      props.initialValue instanceof Array ? (
        <Input.Group compact={true}>
          <Cascader
            style={{ width: "100%" }}
            options={array}
            placeholder={placeholder || `${label}`}
          />
        </Input.Group>
      ) : (
        <div
          style={{
            textAlign: "center",
            // wordWrap: "break-word",
            // wordBreak: "break-word",
            width: props.findjob ? "230px" : "100%",
            backgroundColor: props.viewDetails
              ? "white"
              : props.salary
              ? "#848589"
              : "#F7F7FC",
          }}
        >
          <b>
            {array.find((item, index) => item[value] === props.initialValue)?.[
              description
            ] || "-"}
          </b>
        </div>
      )}
    </FormItem>
  )
}
export const Notification = (title, message, type) => {
  notification.open({
    message: (
      <span
        style={{
          color:
            type === "success"
              ? "#10c469"
              : type === "error"
              ? "red"
              : "#f2994a",
        }}
      >
        {title}!
      </span>
    ),
    description: message,
    icon:
      type === "success" ? (
        <CheckCircleOutlined style={{ color: "#10c469" }} />
      ) : type === "error" ? (
        <CloseCircleOutlined style={{ color: "red" }} />
      ) : (
        <ExclamationCircleOutlined style={{ color: "#f2994a" }} />
      ),
    placement: "bottomRight",
  })
}

const AntDatePicker = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: props.message || (
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
        >
          <div>Please select</div>
          <div style={{ textTransform: "lowercase" }}>{props.placeholder}</div>
        </div>
      ),
    },
  ]

  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule
  const localInitialValue = props.initialDate
    ? moment(props.initialDate, "YYYY-MM-DD")
    : null

  return (
    <FormItem
      {...props}
      initialValue={localInitialValue}
      localRules={localRules}
    >
      <DatePicker
        {...props}
        disabled={props.disabled || props.viewDetails}
        disabledDate={props.disabledDate}
        showTime={props.showTime}
        placeholder={props.placeholder}
        format={props.showTime ? "DD-MM-YYYY HH:mm" : "YYYY-MM-DD"}
        onChange={props.onChange}
        className={props.viewDetails ? "view-date" : props.className}
        name={props.name}
        onOk={props.onOk}
        style={{
          height: "40px",
          width: "100%",
          border: props.viewDetails ? "none" : "",
          background: props.viewDetails ? "rgb(247, 247, 252)" : "",
          fontWeight: props.viewDetails ? "bold" : "",
          textAlign: props.viewDetails ? "center" : "",
          color: props.disabled && !props.viewDetails ? "#777777" : "#262626",
          borderRadius: "100px",
          ...props.style,
        }}
      />
    </FormItem>
  )
}

const AntTimePicker = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: props.message || `Please select ${props.label}`,
    },
  ]

  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule
  const localInitialValue = props.ininitialValue
    ? moment(props.ininitialValue, "HH:mm")
    : ""

  return (
    <FormItem
      {...props}
      initialValue={localInitialValue}
      localRules={localRules}
      // initialValue={props.ininitialValue}
    >
      <TimePicker
        {...props}
        disabled={props.disabled || props.viewDetails}
        showTime={props.showTime}
        disabledMinutes={props.disabledMinutes}
        use12Hours
        placeholder={props.placeholder}
        format="h:mm A"
        onChange={props.onchange}
        className={props.viewDetails ? "view-time" : props.className}
        prevIcon={props.prevIcon}
      />
    </FormItem>
  )
}

export const Card = (props) => {
  return (
    <div>
      {props.backLabel && !props.renderHeadTitle ? (
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontWeight: "bold" }}>
            <Link className={"card-link"} to={props.backLink || "#"}>
              <ArrowLeftOutlined /> {props.backLabel}
            </Link>
          </h3>
        </div>
      ) : (
        props.renderHeadTitle && <>{props.renderHeadTitle()}</>
      )}
      <div
        className={`${props.className}`}
        style={{
          background: "white",
          minWidth: "275px",
          width: props.width || "100%",

          border: props.borderless ? "none" : "1px solid lightgrey",
          padding: !props.sub ? "18px 20px" : "10px",
          overflow: "auto",
          ...props.style,
        }}
      >
        <Skeleton loading={props.loading} active>
          {props.renderHeader ? (
            <>{props.renderHeader()}</>
          ) : props.title && !props.sub ? (
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: props.headingMargin || "20px",
              }}
            >
              {props.title}
            </h3>
          ) : (
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: props.headingMargin || "10px",
              }}
            >
              {props.title}
            </h4>
          )}
          {props.children}
        </Skeleton>
      </div>
    </div>
  )
}
export const Password = (props) => {
  const {
    label,
    style,
    rules,
    onBlur,
    message,
    onClick,
    required,
    onChange,
    className,
    fieldProps,
    allowClear,
    placeholder,
    validate,
  } = props

  const lengthValidator = {
    validator: (rules, value) => {
      if (value?.length >= 8) {
        return Promise.resolve()
      } else {
        return Promise.reject(`Should be at least 8 characters long`)
      }
    },
  }

  const upperCaseValidator = {
    pattern: new RegExp("^(?=.*[A-Z]).+$"),
    message: "Should contain a uppercase alphabet",
  }

  const lowerCaseValidator = {
    pattern: new RegExp("^(?=.*[a-z]).+$"),
    message: "Should contain a lowercase alphabet",
  }

  const numberValidor = {
    pattern: new RegExp("^(?=.*[0-9]).+$"),
    message: "Should contain a number",
  }

  const specialChar = {
    pattern: new RegExp("^(?=.*[!@#$%^&*]).+$"),
    message: "Should contain a special character",
  }

  const tempRules = rules instanceof Array ? rules : []
  const localRules = validate
    ? [
        ...tempRules,
        {
          required: required,
          message: message || "Please enter your password",
        },
        lowerCaseValidator,
        upperCaseValidator,
        numberValidor,
        specialChar,
        lengthValidator,
      ]
    : required
    ? [
        ...tempRules,
        {
          required: required,
          message: message || "Please enter your password",
        },
      ]
    : tempRules

  return (
    <FormItem {...props} localRules={localRules}>
      <Input.Password
        allowClear={allowClear}
        onBlur={onBlur}
        autoFocus={false}
        onClick={onClick}
        onChange={onChange}
        className={className}
        placeholder={placeholder || `${label}`}
        autoComplete="password"
        style={{
          height: "40px",
          fontSize: "14px",
          ...style,
        }}
        {...fieldProps}
      />
    </FormItem>
  )
}
export { AntInput as Input }
export { AntSelect as Select }
export { AntDatePicker as DatePicker }
export { AntTimePicker as TimePicker }
