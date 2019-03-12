'use strict'
const store = require('./store.js')

const signUpSuccess = () => {
  $('#user-message').text('Successfully signed up')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#user-message').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in')
  store.user = responseData.user
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error on sign in')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully changed password')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error: Password change failure')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#user-message').show()
  $('#user-message').text('Successfully signed out')
  $('form').trigger('reset')
  store.user = null
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

const createBookClubSuccess = (responseData) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Created Book Club!')
  $('form').trigger('reset')
  console.log(responseData)
}

const createBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error creating book club :(')
  $('form').trigger('reset')
}

const getBookClubListSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Retrieved List of Book Clubs!')
  $('form').trigger('reset')
  // $('#show-book-club-list').text(data.book_clubs[0].name)
  // console.log(data.book_clubs)
}

const getBookClubListFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error getting list :(')
  $('form').trigger('reset')
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
  getBookClubListSuccess,
  getBookClubListFailure
}
