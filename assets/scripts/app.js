'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#create-book-club-form').on('submit', events.onCreateBookClub)
  $('#update-book-club-form').on('submit', events.onUpdateBookClub)
  $('#get-book-club-list-form').on('submit', events.onGetBookClubList)
  $('#get-one-book-club-form').on('submit', events.onGetOneBookClub)
  $('#delete-one-book-club-form').on('submit', events.onDeleteOneBookClub)
})
