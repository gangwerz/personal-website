# The Personal Website of Zach Gangwer

## Welcome,

This is all the code for my personal website, which is 100% client-side and written in React, deployed via [Gitlab CI](https://docs.gitlab.com/ce/ci/), and hosted from a AWS S3 Bucket.

## The Change Blog

**_This "blog" is only located here temporarily. These entries are being ported to articles for my new [blog](https://blog.gangwerz.xyz)._**

#### 0.5.0

Shifted the focus of the website from a skills showcase, to an overview of my projects. This is because I would have ended up with a lot of sections with very little content. Now I will have fewer sections, but since the scope is larger, I will have more to say, making each one more worthwhile to read.

#### 0.4.1

Fleshed-out the **README** and the **Change Blog**, adding content for each release.

### 0.4.0 - Styled Parallax

I finally broke down, and changed the `Greeter` from a solid background, to a picture. At the same time, I created a generic `Parallax` component that takes an image URL and creates a full-viewport parallax layer. Additionally, I converted nearly all styling to [styled-components](https://styled-components.com/). While working on the components, I added flex containers and media queries. So, the website is much more responsive and the `Badge`'s are less obnoxious when expanding (although not yet animated). This release also featured quite a bit of refactoring, both removal of unused and deprecated components, as well as moving page components to `components/pages/` and the new parallax component to `components/shared`.

---

_While writing the 0.4.0 release, I decided to add the blog to the README. Any posts below this point were written retroactively, based on my offline notes and may refer to future features and releases._

#### 0.3.2

In response to a job posting asking for a _link_ to a resume, in place of an upload, I added a badge icon to my resume. After showing my website to some family, they were confused about the Gitlab and GitHub links, as they are outside of the tech-world, so I added some hover behavior to show the name of the icon and clear that up for the lay-folk. I took the opportunity to update the About Me content.

#### 0.3.1

The Gitlab pipeline was failing due to unused imports as a result of the refactoring. This release cleaned those up.

### 0.3.0 - The Fonts are Awesome

This is when the full-screen layout was introduced. I removed the navbar, and changed the header to a full-screen blue background with my name, and [Font Awesome](https://fontawesome.com/) icons for my email, Gitlab, and GitHub links that were previously in the "About Me" section. I then removed the blog and made the "About Me" section a full page with a short introductory essay on myself.

### 0.2.0 - Two Many Styles!

In an attempt to make the website DRY-er, I created two additional stylesheets, one for landscape displays, one for portrait displays. I would have everything shared in the `index.css` sheet, and put desktop-focused content in `landscape.css` and mobile-focused content in `portrait.css`. I thought this would make my stylesheets cleaner and easier to manage, however as I used them, it was much, much harder to manage than just using media queries in the shared sheet.

#### 0.1.1

After publishing, I did not like the look of the duplicate, second post as it gave off an "incomplete" look, which the site was.

### 0.1.0 - *React*ionary Framework Migration

As I explored more and more Front-end and Full-stack developer jobs, I realized how wide the chasm between React and every other framework was. At that point, I ported the previous Vue website to React, however I opted to continue writing in Typescript instead of standard ECMAscript.

I was looking to have a unified style between my Resume, Cover Letter, and Website. So, this build features a blue, bar-styled header with an animated navbar, although only one page was implemented at this point. The main body of the homepage had a rudimentary "about me" section that only had git repo and email links. The rest of the page was going to be dedicated to blog articles, so there are two articles hard coded in. I wanted to have a white-on-white, card-style layout for the blog posts although the values used at this point were abysmal.

### Previous Framework - Vue
