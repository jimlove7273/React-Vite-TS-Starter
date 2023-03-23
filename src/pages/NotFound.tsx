/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Not Found</h1>
      <br />
      <Link to="/">Go Home</Link>
    </>
  );
}
