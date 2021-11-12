import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: [], $description: String!, $bookID: ID, $image: String!, $link: String!) {
    saveBook(author: $authors, description: $description, bookId: $bookId, image: $image, link: $link) {
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        bookId
        image
        link
      }
    }
  }
// `;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId) {
    removeBook(bookId: $bookId) {
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        bookId
        image
        link
      }
    }
  }

`;