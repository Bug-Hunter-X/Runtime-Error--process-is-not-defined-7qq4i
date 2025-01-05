```javascript
// pages/aboutSolution.js

export async function getServerSideProps(context) {
  const myVariable = process.env.MY_VARIABLE;

  return {
    props: {
      myVariable,
    },
  };
}

export default function About({ myVariable }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {myVariable && <p>My variable: {myVariable}</p>}
    </div>
  );
}
```