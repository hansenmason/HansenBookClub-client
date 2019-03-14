'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

$('.book-forms').hide()
$('#sign-out-form').hide()
$('#change-password-form').hide()

const input = document.getElementById('get-one-book-club-form')
input.oninvalid = function (event) {
  event.target.setCustomValidity('Book Club Should Start With A Letter or Number')
}

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

  api.getBookClubList()
    .then((data) => {
      let stop = true
      for (let i = 0; i < data.book_clubs.length; i++) {
        const oneClub = data.book_clubs[i].name
        if (oneClub.toLowerCase() === bookClubData.book_club.name.toLowerCase()) {
          stop = false
        }
      }
      if (stop === true) {
        api.createBookClub(bookClubData)
          .then(ui.createBookClubSuccess)
          .catch(ui.createBookClubFailure)
      } else {
        ui.bookClubExistsFailure()
      }
    })
}

const onUpdateBookClub = (event) => {
  event.preventDefault()
  const form = event.target
  const bookClubData = getFormFields(form)
  let bookId = 0

  api.getBookClubList()
    .then((data) => {
      for (let i = 0; i < data.book_clubs.length; i++) {
        const oneClub = data.book_clubs[i].name
        if (oneClub.toLowerCase() === bookClubData.book_club.old_name.toLowerCase()) {
          bookId = data.book_clubs[i].id
        }
      }
      api.updateBookClub(bookClubData, bookId)
        .then(ui.updateBookClubSuccess)
        .catch(ui.updateBookClubFailure)
    })
    .catch(ui.getBookClubListFailure)
}

const onGetBookClubList = (event) => {
  event.preventDefault()
  api.getBookClubList()
    .then(ui.getBookClubListSuccess)
    .catch(ui.getBookClubListFailure)
}

const onGetOneBookClub = (event) => {
  event.preventDefault()
  const form = event.target
  const bookClubData = getFormFields(form)
  let bookId = 0

  api.getBookClubList()
    .then((data) => {
      for (let i = 0; i < data.book_clubs.length; i++) {
        const oneClub = data.book_clubs[i].name
        if (oneClub.toLowerCase() === bookClubData.book_club.name.toLowerCase()) {
          bookId = data.book_clubs[i].id
        }
      }
      api.getOneBookClub(bookId)
        .then(ui.getOneBookClubSuccess)
        .catch(ui.getOneBookClubFailure)
    })
    .catch(ui.getBookClubListFailure)
}

const onDeleteOneBookClub = (event) => {
  event.preventDefault()
  const form = event.target
  const bookClubData = getFormFields(form)
  let bookId = 0

  api.getBookClubList()
    .then((data) => {
      for (let i = 0; i < data.book_clubs.length; i++) {
        const oneClub = data.book_clubs[i].name
        if (oneClub.toLowerCase() === bookClubData.book_club.name.toLowerCase()) {
          bookId = data.book_clubs[i].id
        }
      }
      api.deleteOneBookClub(bookId)
        .then(ui.deleteOneBookClubSuccess)
        .catch(ui.deleteOneBookClubFailure)
    })
    .catch(ui.deleteBookClubListFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateBookClub,
  onUpdateBookClub,
  onGetBookClubList,
  onGetOneBookClub,
  onDeleteOneBookClub
}
