# gatsby-plugin-formol

Support Formol's webpack/Babel requirements on Gatsby

## Installing

Run:

`yarn add gatsby-plugin-formol formol date-fns@next`

`yarn add -D @babel/plugin-proposal-decorators babel-plugin-add-react-static-displayname`

## Using Formol

### Create your form

```js
import React from "react";
import Formol, { Field } from "formol";
import "formol/lib/default.css";

const handleSubmit = async values => {
  console.log(values);

  // process submission (e.g., send to API)...
};

const SignUpForm = () => (
  <Formol onSubmit={handleSubmit}>
    <Field required>First Name</Field>
    <Field required>Last Name</Field>
    <Field required type="email">
      Email
    </Field>
    <Field
      required
      pattern="^[0-9]{5}$"
      validityErrors={({ patternMismatch }) =>
        patternMismatch && "Zip must be a five-digit number"
      }
    >
      Zip
    </Field>
  </Formol>
);

export default SignUpForm;
```

### Display it in a page

```js
import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SignUpForm from "../components/SignUpForm";

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <SignUpForm />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default HomePage;
```
