const validate = values => {
    const errors = {}
    if (!values.members || !values.members.length) {
      errors.members = { _error: 'At least one Label and Value must be entered' }
    } else {
      const membersArrayErrors = []
      values.members.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.enterLabel) {
          memberErrors.enterLabel = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.enterValue) {
          memberErrors.enterValue = 'Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
      })
      if (membersArrayErrors.length) {
        errors.members = membersArrayErrors
      }
    }
    return errors
  }

  export default validate


