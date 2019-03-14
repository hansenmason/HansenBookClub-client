'use strict'
const store = require('./store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up!')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up :(')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in!')
  store.user = responseData.user
  $('form').trigger('reset')
  $('.book-forms').show()
  $('#sign-out-form').show()
  $('#change-password-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const signInFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign in :(')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password!')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const changePasswordFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error: Password change failure!')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out!')
  $('form').trigger('reset')
  store.user = null
  $('.book-forms').hide()
  $('#sign-out-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#change-password-form').hide()
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const signOutFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error signing out')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-message').show()
  $('#user-message').text('Something went wrong')
  $('form').trigger('reset')
}

const createBookClubSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Created Book Club: ' + data.book_club.name)
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const createBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error creating book club :(')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const bookClubExistsFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error: A Book Club With That Name Already Exists!')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const getBookClubListSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Retrieved List of Book Clubs!')
  $('form').trigger('reset')
  const finalList = []
  for (let i = 0; i < data.book_clubs.length; i++) {
    const oneClub = data.book_clubs[i].name
    finalList.push(' ' + oneClub)
  }
  $('#show-book-club-list').show()
  $('#show-book-club-list').text(finalList.sort())
  $('#show-one-book-club').hide()
}

const getBookClubListFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Getting List :(')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const updateBookClubSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Updated Book Club to: ' + data.book_club.name)
  $('form').trigger('reset')
  $('#show-one-book-club').text(data.book_club.name + ': ' + data.book_club.booklist)
  $('#show-one-book-club').show()
  $('#show-book-club-list').hide()
}

const updateBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Updating Book :(')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const getOneBookClubSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Retrieved Book Club!')
  $('form').trigger('reset')
  $('#show-one-book-club').show()
  $('#show-one-book-club').text(data.book_club.name + ': ' + data.book_club.booklist)
  $('#show-book-club-list').hide()
}

const getOneBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Getting Book :(')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

const deleteOneBookClubSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully Deleted Book Club!')
  $('form').trigger('reset')
  $('#show-book-club-list').hide()
  $('#show-one-book-club').hide()
}

const deleteOneBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Deleting Book :(')
  $('form').trigger('reset')
  $('#show-one-book-club').hide()
  $('#show-book-club-list').hide()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  failure,
  changePasswordSuccess,
  changePasswordFailure,
  createBookClubSuccess,
  createBookClubFailure,
  bookClubExistsFailure,
  getBookClubListSuccess,
  getBookClubListFailure,
  updateBookClubSuccess,
  updateBookClubFailure,
  getOneBookClubSuccess,
  getOneBookClubFailure,
  deleteOneBookClubSuccess,
  deleteOneBookClubFailure
}
