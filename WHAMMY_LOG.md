# Whammy Log
A list of pitfalls I ran into while working on this project and how I resolved them:

1. Getting the project attached to Qualified
   **The Problem**: I was having issues getting the qualified attach feature to work with my local ide

   **The Cause**: It seemed that an extra file was being created/added during the attach process, which caused it to fail
   
   **The Solution**: The file issue combined with a small mention in the instructions that qualified might not play well with this project,
   I opted to simply work on the project locally and copy my files over later. Thought it would have been nice to get the sync to work, I
   figured it would be best to focus more on completing the assignment

2. making sure the links/routes worked properly
   **The Problem**: My routes were not working properly, despite the correct setup (or so I thought)

   **The Cause**: In the top level index.js file, the <App> component was already wrapped in the <Router> tags from ReactRouter, which
   I mistakenly added at the Layout/index.js 

   **The Solution**:
   Once I removed the extra <Router> wrapper, my routes started to work. 

3. text matching issues with tests
   **The Problem**: Some tests gave me errors Like "Unable to find an element with the text" despite the expected text being present in the UI
   upon start up

   **The Cause**: Thought I had the correct text, I had added extra pieces of text (usually header text) in the specific element that caused the mismatch

   **The Solution**: Once I moved the extra text to their own elements, I was able to get the tests to pass




