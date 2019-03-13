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
  return $.ajax({
    url: config.apiUrl + '/book_clubs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: bookData
  })
}

const updateBookClub = (bookData, id) => {
  return $.ajax({
    url: config.apiUrl + '/book_clubs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: bookData
  })
}

const getBookClubList = () => {
  return $.ajax({
    url: config.apiUrl + '/book_clubs',
    method: 'GET'
  })
}

const getOneBookClub = (id) => {
  return $.ajax({
    url: config.apiUrl + '/book_clubs/' + id,
    method: 'GET'
  })
}

const deleteOneBookClub = (id) => {
  return $.ajax({
    url: config.apiUrl + '/book_clubs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createBookClub,
  updateBookClub,
  getBookClubList,
  getOneBookClub,
  deleteOneBookClub
}
