'use strict'
const config = require('./config.js')
const store = require('./store.js')

const signUp = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBookClub = (bookData) => {
  // console.log(bookData)
  return $.ajax({
    url: config.apiUrl + '/book_clubs',
    method: 'POST',
    data: bookData
  })
}

const getBookClubList = () => {
  return $.ajax({
    url: config.apiUrl + '/book_clubs',
    method: 'GET'
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createBookClub,
  getBookClubList
}
