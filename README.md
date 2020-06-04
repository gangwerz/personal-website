# The Personal Website of Zach Gangwer

## Welcome,

This is all the code for my personal website, which is 100% client-side and written in React, deployed via [Gitlab CI](https://docs.gitlab.com/ce/ci/), and hosted from a AWS S3 Bucket.

## The Change Blog

**_This "blog" is only located here temporarily. Once I have server hosting picked out, I will move the contents of this section to a dedicated website._**

### 0.4.0 - Parallax

I finally broke down, and changed the `Greeter` from a solid background, to a picture. At the same time, I created a generic `Parallax` component that takes an image URL and creates a full-viewport parallax layer. Additionally, I converted nearly all styling to [styled-components](https://styled-components.com/). While working on the components, I added flex containers and media queries. So, the website is much more responsive and the `Badge`'s are less annoying when expanding (although not yet animated). This release also featured quite a bit of refactoring, both removal of unused and deprecated components, as well as moving page components to `components/pages/` and the new parallax component to `components/shared`.

---

_While writing the 0.4.0 release, I decided to add the blog to the README. Any posts below this point were written retroactively, based on my offline notes and may refer to future features and releases._

### 0.3.2

### 0.3.1

### 0.3.0

### 0.2.0

### 0.1.1

### 0.1.0
