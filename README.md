

# @testLibrary

This is the UI for test.

- Next js 13 
- Typescript



# Installation

Install dependencies using npm

```bash
npm install
```

# Running the project locally

You can start the project with several different configurations

```bash

npm run dev #  localhost:3000
npm run build # don't work due to the use of next-auth 
npm run start # don't work due to the use of next-auth 

```

# Create a .env.local in the root 

API_URL=https://devies-reads-be.onrender.com
FACEBOOK_CLIENT_ID=1254716498594229
FACEBOOK_CLIENT_SECRET=ef7b80948599d4bcb09b474e548add56
NEXTAUTH_SECRET=DFJDLSAJFDSJFLJ4532KNL34432Ö5L4KN

# Code conventions

Please try to use Typescript and follow all the code isolated to that component inside the folder structure. If any code is to be used in several components, move it outside to the root.

```bash
- interfaces
- hooks
- components
    - TestComponent
        - interfaces
        - hooks
        - components
        - __tests__
            - TestComponent.test.tsx
        - TestComponent.tsx
        - index.tsx
- views
    - TestView
        - components
        - interfaces
        - hooks
        TestView.tsx
        index.tsx
```

**TestComponent.tsx**

```typescript
// This file contains tsx and should be named .tsx
import React from "react";

interface Props {
  title?: string;
}

const TestComponent: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default TestComponent;
```

**helper.ts**

```typescript
// This file only contains ts code so should have .ts

export const percentage = (partialValue: number, totalValue: number) => {
  return Math.round((100 * partialValue) / totalValue);
};

export default { percentage };
```

