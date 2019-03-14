I used the following technologies:
html, css, javascript, jquery, ajax, rails, ruby

Link to Back-end Repo: https://github.com/hansenmason/HansenBookClub-rails-api

Planning and Development Process:
I planned to do the signin/up/out and password features first for both front-end
and back end. From there, I wanted to focus on back-end features, such as
setting up a relationship to user with book clubs. I planned to set up a book club
table, and add users to it through migration. From there, I wanted to ensure private
settings for data such as update or destroy, but allowing any one to see any of the
listings of book clubs, the whole list as well as any individual book club. Once
my back-end was set up, I planned to work the front-end starting with form fields,
and then working on events, api, and ui all together for each of the button
requests of get(all/singular), create, update, and delete. Once I had all the forms
set up, and linked to the back-end, I planned on working on the css. Initially I
had planned to link books and their authors into relationships with book clubs,
but with the time I had, that was going to be a stretch goal. Instead my more realistic
plan became having the book listings within the book clubs as text, that are not
linked in the back-end, but are all part of the same book_club data, as a NAME
of book club and a BOOKLIST of books, as a text field. Once I had finished all of that,
I planned to add finishing touches of form field formatting (unable to just create
book without input into name, and other such tweaks). I was able to execute
all of steps, with certain steps taking a lot longer, especially at the beginning.
I had a lot of issues with the back-end, in terms of understanding how things
were private/accessable, token auth, etc. I also had a problem figure out how to
show booklist, even though I had added it to my book club table. I problem solved
this through previous lectures/trainings, as well as google, which also helped me understand
private settings. As for the front-end, my biggest problems were in the beginnging,
after my user features were set up. I had no problem getting all books, but updating
and getting by book (and thus deleting by id) were hard to figure out. After much
console logging, I understand how the processes of api requests and response data
were executing, and decided to api request all books on a get book club/update book club/detele book club request, and then cycle through all book clubs to find the specific one
if the name matches, and then use that as the book club id for the api request.
In the end, console log was my most utilized problem solving strategy, as well
as google for any functions I wanted/needed. I was able to use the same get book club
strategy to implement a functionality where you cannot create a book club if
a book club with that name already exists.

Unsolved Problems:
My unsolved problems include mostly css(not using handlebars), as well as form
field inputs. A user must include an input into the form fields for book clubs,
but a space does suffice, and I wanted to have it include at least one of characters,
numbers, etc. In the future I hope to fix this, and make it so users cannot
just make a book club with 85 spaces in it, just for aesthetic and practical
purposes. As for the css, since my book club list is just an array, as well
as my booklists are just texts, it is difficult to display them in any other way
then just a list on the page. In the future I hope to make the book club/booklist
displays more aesthetically pleasing. And as you can see from the ERD link shown
in the back-end repo, I was unable to make books and authors as their own columns/tables with
relationships to book clubs/users. In future iterations I hope to successfully
achieve this, rather than having the booklist just a text field.

User Stories:
```md
As a user, I want to be able to sign up an account.
As a user, I want to be able to sign in and sign out of an account.
As a logged in user, I want to the option to change my password.
As a user, I want to be able to view a list of different book clubs.
As a user, I want to be able to enter each book club section and view their list of books.
As a logged in user, I want to be able to create my own book club library.
As a logged in user, I want to be able to edit my own book club library.
As a logged in user, I don't want to be able to have any unauthorized user editing my library.
```



Link to wireframe: https://imgur.com/tRvVdrI
