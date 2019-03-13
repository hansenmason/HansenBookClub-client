'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateBookClub = (event) => {
  event.preventDefault()
  const form = event.target
  const bookClubData = getFormFields(form)
  console.log(bookClubData)
  api.createBookClub(bookClubData)
    .then(ui.createBookClubSuccess)
    .catch(ui.createBookClubFailure)
}

const onUpdateBookClub = (event) => {
  event.preventDefault()
  const form = event.target
  const bookClubData = getFormFields(form)

  api.updateBookClub(bookClubData)
    .then(ui.updateBookClubSuccess)
    .catch(ui.updateBookClubFailure)
}

const onGetBookClubList = (event) => {
  event.preventDefault()
  api.getBookClubList()
    .then(ui.getBookClubListSuccess)
    .catch(ui.getBookClubListFailure)
}

const onGetOneBookClub = (event) => {
  event.preventDefault()
  api.getOneBookClub()
    .then(ui.getOneBookClubSuccess)
    .catch(ui.getOneBookClubFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateBookClub,
  onUpdateBookClub,
  onGetBookClubList,
  onGetOneBookClub
}
