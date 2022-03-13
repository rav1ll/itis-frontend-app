const maxLengthValidatorBuilder = (length)=> (value) => {
    return value.length <= length ? '' : `Field must contain less than ${length} symbols`;
}

export default maxLengthValidatorBuilder;