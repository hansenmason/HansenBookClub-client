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
  store.bookClubId = responseData.book_club.id
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
  // $('#show-book-club-list').text(data.book_clubs[18].booklist)
  const finalList = []
  for (let i = 0; i < data.book_clubs.length; i++) {
    const oneClub = data.book_clubs[i].name
    finalList.push(' ' + oneClub)
  }
  $('#show-book-club-list').text(finalList)
  console.log(data.book_clubs)
}

const getBookClubListFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Getting List :(')
  $('form').trigger('reset')
}

const updateBookClubSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Updated Book Club!')
  $('form').trigger('reset')
  $('#show-one-book-club').text(data.book_club.name)
  console.log(data)
}

const updateBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Updating Book :(')
  $('form').trigger('reset')
}

const getOneBookClubSuccess = (data) => {
  $('#user-message').show()
  $('#user-message').text('Successfully Retrieved Book Club!')
  $('form').trigger('reset')
  $('#show-one-book-club').text(data.book_club.name)
  console.log(data)
}

const getOneBookClubFailure = () => {
  $('#user-message').show()
  $('#user-message').text('Error Getting Book :(')
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
  getBookClubListFailure,
  updateBookClubSuccess,
  updateBookClubFailure,
  getOneBookClubSuccess,
  getOneBookClubFailure
}
